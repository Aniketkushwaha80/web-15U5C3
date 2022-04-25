import { useState,createContext } from "react"

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
const [isAuth,SetAuth]=useState(false)
const HandleAuth=(state)=>{
    SetAuth(state)
}
return(
    <AuthContext.Provider value={{isAuth,HandleAuth}}>{children}</AuthContext.Provider>
)
}