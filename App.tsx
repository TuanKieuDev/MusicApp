import 'react-native-gesture-handler';
import React, {useCallback, useMemo, useState } from "react"; 
import { ITheme, ThemeContext, themes, TMode } from "./src/config/Theme";
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
 import {useFonts} from "expo-font" 
 import './src/trans/i18n';
import { ILocalization, LocalizationContext, TLocale } from './src/config/Localize';
import { TScope } from './src/trans/vi';
import { TranslateOptions } from 'i18n-js';
import I18n from 'i18n-js';


export default function App() {
  const [mode, setMode] = useState<TMode>("dark");
  const [locale, setLocale] = useState<TLocale>("vi")
  const localizationContext: ILocalization = useMemo(()=>({
    t: (scope: TScope, options?: TranslateOptions)=>
      I18n.t(scope, { locale, ...options }),
    locale,
    setLocale,
  }),
  [locale]
);
   const [loaded] = useFonts({
      Regular: require("./src/asset/fonts/SF-Pro-Text-Regular.otf"),
      Bold: require("./src/asset/fonts/SF-Pro-Text-Bold.otf"),
      Heavy: require("./src/asset/fonts/SF-Pro-Text-Heavy.otf"),
      Light: require("./src/asset/fonts/SF-Pro-Text-Light.otf"),
      Medium: require("./src/asset/fonts/SF-Pro-Text-Medium.otf"),
      SemiBold: require("./src/asset/fonts/SF-Pro-Text-Semibold.otf"),
   })
  const theme: ITheme = useMemo(
    () => (mode === "dark" ? themes.dark : themes.light),
    [mode]
  );
  const toggleTheme = useCallback(()=>{setMode((prevMode)=>prevMode ==='light'?'dark':'light')},[])
  if(!loaded){
    return null;
  }
  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
        mode,
      }}
    >
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
      
    </ThemeContext.Provider  >
  );
}