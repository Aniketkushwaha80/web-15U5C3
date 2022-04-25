import axios from "axios";
import "../App.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const [users,SetUser]=useState([])
 
  const {id}=useParams()
 
  useEffect(()=>{ 
axios.get(`http://localhost:8080/employee/${id}`)
.then(({data})=>{
   SetUser(data)

})
  },[])
  console.log(users)

const task=users.tasks
console.log(task)
  return (
    <div className="user_details">
      <img src={users.image} className="user_image" />
      <h4 className="user_name">{users.employee_name}</h4>
      <span className="user_salary">${users.salary}</span>
      <span className="tasks">{
// task.map((e)=>(
//   <li className="task">{e}</li>
// ))

  <li className="task">{task}</li>
      }
    

    
      </span>
      Status: <b className="status">{users.status}</b>
      Title: <b className="title">{users.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button  className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
</div>

  );
};
