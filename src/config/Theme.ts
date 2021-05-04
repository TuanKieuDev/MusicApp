import React from "react";
import { ColorValue } from "react-native";
import Colors from "./Colors";

export type TMode = "dark" | "light"
export interface ITheme{
    background: ColorValue;
    text: ColorValue;
    text_placeholder: ColorValue;
    tab_background: ColorValue;
    tab_active: ColorValue;
    tab_inactive: ColorValue;
    icon_color: ColorValue;
}

export interface IThemeContext {
    theme: ITheme;
    toggleTheme: () => void;
}

export const themes = {
    light: {
      background: Colors.secondary,
      text: Colors.color_basic_2,
      text_placeholder: Colors.color_basic_4,
      tab_background: Colors.color_basic_5,
      icon_color: Colors.primary,
    },
    dark: {
      background: Colors.primary,
      text: Colors.color_basic_1,
      text_placeholder: Colors.color_basic_3,
      tab_background: Colors.color_basic_5,
      icon_color: Colors.secondary,
    }
  };

  export const ThemeContext = React.createContext<IThemeContext>({
      theme: themes.light,
      toggleTheme: ()=>{}
  });

  export const useTheme = (): IThemeContext => {
      const {toggleTheme,theme} = React.useContext(ThemeContext);
      return {
        toggleTheme,
        theme,
      }   
  }