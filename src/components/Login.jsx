import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
 
export const Login = () => {
  //  use reqres to log user in.

  const navigate=useNavigate()
const {HandleAuth}=useContext(AuthContext)

  const [login ,setLogin]=useState([])
 
  
  const Handlelogin=(e)=>{
  
    const {name, value}=e.target
        setLogin({
            ...login,[name]:value,
        })
    }
   
  
    const handleSubmit=(e)=>{
      e.preventDefault()
     
   
     
      const create={
       
        "username": login.username,
        "password":login.password,
       
      }
      fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(create),
      
      }) .then((response) => response.json())
      .then((data) => {
        var token=data.token

        if(token){

HandleAuth(true)
navigate(-1)
        }
        // code here //
        if (data.error) {
          alert("Error Password or Username"); /*displays error message*/
        } else {
        

          
        }
      })
      .catch((err) => {
        console.log(err);
      });
      alert("registration succesful")
      
      }
    


  return (
    <form onSubmit={handleSubmit} className="loginform">
      <input onChange={Handlelogin}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input onChange={Handlelogin}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
