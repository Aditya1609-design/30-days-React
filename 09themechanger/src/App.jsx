import { useEffect, useState } from "react";
import { Themeprovider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/card";

export default function App() {
  const [themeMode,setthemeMode] = useState("light")

  const lighttheme = () => {
    setthemeMode("light")
  }
  const darktheme = () => {
    setthemeMode("dark")
  }


  // actual change in theme
  useEffect(() => {
    if(document.querySelector('html').classList.contains("light")){
      document.querySelector('html').classList.remove("light")
      document.querySelector('html').classList.add("dark")

    }
    else{
      document.querySelector('html').classList.remove("dark")
      document.querySelector('html').classList.add("light")
    }
  },[themeMode])


  return (

    <Themeprovider value={{themeMode,lighttheme,darktheme}}>

            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>



    </Themeprovider>
    

  );
}