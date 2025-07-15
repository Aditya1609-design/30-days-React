import { createContext,useContext } from "react";

export const Themecontext = createContext({
    themeMode: "light",
    darktheme: () => {},
    lighttheme: () => {},

})

export const Themeprovider = Themecontext.Provider


// custom hook
export default function usetheme(){
    return useContext(Themecontext)
}