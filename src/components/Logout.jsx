import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";

 
export const Logout = () => {
  //  use reqres to log user in.

  const navigate=useNavigate()
const {HandleAuth}=useContext(AuthContext)

    


  return (
  <div>
    <button onClick={()=>{
      HandleAuth(false)
      navigate("/")
    }}>Logout</button>
  </div>
  );
};
