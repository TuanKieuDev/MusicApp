import { TScope } from './../trans/vi';
import {createContext, useContext} from "react"
import i18n from "i18n-js"

export type TLocale = "vi" | "en"

export interface ILocalization {
    t: (scope: TScope, option?:i18n.TranslateOptions | undefined)=>string; // ham lay text
    locale: TLocale; //ngon ngu hien tai
    setLocale: (locale: TLocale) =>void; //ham set ngon ngu
}

export const LocalizationContext = createContext<ILocalization>({
    t: (scope:TScope) => "vi",
    locale: "vi",
    setLocale: (locale = "vi") => {},
})

export const useLocale = () =>{
    const {t,locale,setLocale} = useContext<ILocalization>(LocalizationContext)
    return {t,locale,setLocale}
}
