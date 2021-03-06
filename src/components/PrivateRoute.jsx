import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/Auth.context"


export const ProtectedRoute=({children})=>{
    const {isAuth}=useContext(AuthContext)
   
    if(!isAuth){
        return <Navigate to={"/login"} replace={false}/>
    }
    return children
}