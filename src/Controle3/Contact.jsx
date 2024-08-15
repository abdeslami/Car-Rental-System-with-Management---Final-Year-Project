
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useNavigate,useParams } from 'react-router-dom';
import { DeleteVoiture } from './Action.jsx';

export default function Contact() {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [message,setMessage]=useState('')
const [telephone,setTelephone]=useState('')

const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/contact',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify({
                name:name,
                email:email,
                telephone:telephone,
                message:message
            })
        }).then((r)=>{
            if(r.ok){
                alert('votre réservation envoyer ')
            }
            navigate('/listevoiture')
        })

      
    };

    return (
        <div>
               <div class="main">
        <div class="head">
            <div class="logo">
                <img src="../logo.png" alt=""/>
            </div>
            <div class="nav">
                <div class="list">
                    <img src="../email.png" alt=""/>
                    <p>
                        <b>For Support MAIL US :</b> <br/>
                        <a href="#"> support-loc-doc@gmail.com</a>
                    </p>
                </div>
                <div class="list">
                    <img src="../telephone.png" alt=""/>
                    <p>
                        <b>SERVICE HELPLINE CALL US :</b><br/>
                        <a href="#"> +212 12 34 56 789</a>
                    </p>
                </div>
                
               
            </div>
         

            </div> 
               
            </div>
            <div class="section">
                <div class="liste">
                    <a href="/">HOME</a>
                    <a href="/about">ABOUT US</a>
                    <Link to="/listevoiture">CAR LISTING</Link>
                    <a href="/contact">CONTACT </a>

                </div>
                <div class="input">
                    <input type="text" placeholder="Search ... "/>
                    <img src="search.png" alt=""/>
                </div>
            </div><br /><br />
            <div className="container mx-auto mt-5 mb-5">
            <h2 style={{display:"hidden"}}>Contact Nous</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom & Prénom:</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div> 
                <div className="form-group">
                    <label htmlFor="name">Téléphone:</label>
                    <input type="text" className="form-control" value={telephone} onChange={(e)=>setTelephone(e.target.value)} required />
                </div> 
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control"  value={message} onChange={(e)=>setMessage(e.target.value)} required />
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
  <button type="submit" class="btn btn-primary my-5 mx-5 w-30">Envoyer</button>
</div>

            </form>
        </div>
            
         
                        <div class="fouter">
                <div class="liste">
                    <h2>ABOUT US :</h2>
                    <ul>
                        <li>LOGIN</li>
                        <li>PRIVACY</li>
                        <li>Support</li>
                        <li>Terms of use</li>

                    </ul>

                </div>
                <div class="input">
                    <h1>Contact :</h1>
                    <input type="text" name="" placeholder="Entre Email Adresse ....."/>
                    <button>Subscribe</button>

                </div>
            </div>
            <div class="copyright">
                <h3>Copyright@<span>loc-doc</span> 2023</h3>
            </div>
        

           
    </div>
    );
}
