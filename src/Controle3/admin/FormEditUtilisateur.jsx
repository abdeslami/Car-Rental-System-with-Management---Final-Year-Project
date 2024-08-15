import React, { useState ,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import { DeleteVoiture } from '../Action.jsx';
import e from 'cors';
export default function FormEditUtilisateur() {
    const { id } = useParams();
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [rolle,setRolle]=useState('');
    const userss=useSelector(state=>state.utilisateur)

    function handleModifier(e){
        e.preventDefault()
        console.log({rolle,username,email,password})
        fetch('http://localhost:3001/utilisateur/'+id,{
            method:"PUT",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                username:username,
                email:email,
                password:password,
                role:rolle,


            })

        })
        alert("Modification bien")
    }
    useEffect(()=>{
        console.log(userss)
        const findusers=userss.find((v)=>v.id==id)
        if(findusers){
            console.log(findusers)
            setUsername(findusers.username)
            setRolle(findusers.role)
            setEmail(findusers.email)

        }
    },[id,userss])
      
  return ( <><div class="wrapper" style={{height:"100rem"}} >
        <aside id="sidebar" className='h-100' style={{position:"fixe"}}>
            
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
				<img src="../../logo.png" alt="" width={"95rem"} />
	
                </a>
            </li>
            <div class="d-flex">
                
                <button class="toggle-btn" type="button">
                    <i class="lni lni-grid-alt"></i>
                </button>
                
            </div>
            <ul class="sidebar-nav">
            <li class="sidebar-item">
                    <Link to={`/admin/${id}`}class="sidebar-link">
                        <img src="../../page_admin_image/dashboard (1).svg" alt="" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li class="sidebar-item">
                    <Link to={`/admin/voitures/${id}`} class="sidebar-link">
                        <img src="../../page_admin_image/user-id-svgrepo-com (1).svg" alt="" />

                        <span> Voiture</span>
                    </Link>
                </li>
                <li class="sidebar-item">
                    <Link to={`/admin/utilisateurs/${id}`} class="sidebar-link">
                        <img src="../../page_admin_image/user-profile-svgrepo-com.svg" alt="" />

                        <span> Utilisateur </span>
                    </Link>
                </li>
                <li class="sidebar-item">
                    <Link to={`/admin/contact/${id}`} class="sidebar-link">
                    <i class="lni lni-package w-10"></i>

                        <span> Boite de Message </span>
                    </Link>
                </li>
                
                
                
                
               
            </ul>
            <div class="sidebar-footer">
                <a href="#" class="sidebar-link">
                    <span>Copyright@loc-doc 2023</span>
                </a>
            </div>
        </aside>
        <div class="main">
            <nav class="navbar navbar-expand px-4 py-3">
                <form action="#" class="d-none d-sm-inline-block">

                </form>
               
            </nav>
            <main class="content px-5 py-4">
                <form onSubmit={handleModifier}> 
                    <div className="form-group">
                        <label className='form-label'>Username</label>
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className='form-control' id="" required/>

                    </div>
                    <div className="form-group">
                        <label className='form-label'>Email</label>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' id="" required/>

                    </div>
                    <div className="form-group">
                        <label className='form-label'>Role</label>
                        <select value={rolle} onChange={(e)=>setRolle(e.target.value)} className='form-control' >
                            <option disabled>select un role</option>
                            <option value="client">CLIENT</option>
                            <option value="admin">ADMIN</option>

                        </select>

                    </div>
                    <div className="form-group">
                        <label className='form-label'>Password</label>
                        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' id="" required/>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Modifier" className='btn btn-primary' />

                    </div>
                </form>
    
            </main>
           
        </div>
    </div>
    
    </>
  )
}






