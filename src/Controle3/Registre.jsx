import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Registre() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/utilisateur').then(res=>res.json())
        .then(res=>setData(res))
    })
    function handleSub(e){
        e.preventDefault()
        data.map((valuer)=>{
            if(valuer.password ==password && valuer.email == email ){
            if(valuer.role=="client"){
            return navigate(`/user/profile/${valuer.id}`)}
            else if (valuer.role=="admin"){
                    return navigate(`/admin/${valuer.id}`)
            }
        
        }
        })
        
    }
    
  return (
    <div class='div'>
     <h1>Sign in</h1>
                 <form onSubmit={handleSub} >
                    <input type="text" name="" id="" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email*" />
                    <input type="password" name="" id="" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password*" />
                    <a href="#">Forget Password ?</a>
                    <button>Sign in</button>
                    <p>
                        Dont have an accout ?<br /><a href="#" >Create One Now</a>
                    </p>


                 </form>
    
    
    
    </div>
  )
}
