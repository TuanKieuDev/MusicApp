import 'react-native-gesture-handler';
import React, {useCallback, useMemo, useState } from "react"; 
import { ITheme, ThemeContext, themes, TMode } from "./src/config/Theme";
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
 import {useFonts} from "expo-font" 

export default function App() {
  const [mode, setMode] = useState<TMode>("dark");
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
      }}
    >
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
      
    </ThemeContext.Provider  >
  );
}