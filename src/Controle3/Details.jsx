
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useParams } from 'react-router-dom';
import { DeleteVoiture } from './Action.jsx';

export default function Details() {
    const {id}=useParams()
    const voiture = useSelector(state => state.voiture);
    const [rechere,setRecherch]=useState('')
    const [selecte,setSelecte]=useState('')
    const voitureT = voiture.filter(valeur => {
        return valeur.class == id
    });
    
    const dispatch=useDispatch()

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
            
            <h2 style={{color:"#2059EB",padding:"10px 10px",fontWeight:"bold",marginTop:"5rem"}}> <strong>  Category </strong>{id}</h2>






                            <div className="carsdisplay">
                            {voitureT.map((car, index) => (
                                <div class="cardvoiture" key={index}>
                                <div class="image">
                                    <img src={car.img} alt="" />
                                </div>

                                <div class="contentvoiture">
                                    <h2>{car.title}</h2>
                                    <p>
                                    <p>Price: {car.prevPrice} DH</p>
                                    <p>Class: {car.class}</p>
                                    </p>
                                    <Link to={`/contactvoiture/${car.id}`} class="btn">Contact</Link>
                                </div>
                                </div>
                            ))}
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
