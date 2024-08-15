
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useParams } from 'react-router-dom';
import { DeleteVoiture } from './Action.jsx';

export default function About() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
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
            <div className="container py-5 px-5">
            <h2 style={{color:"#2059EB",padding:"10px 10px",fontWeight:"bold",marginTop:"5rem"}}> <strong>  ABOUT US :  </strong></h2>

       


<div class="section2">
    <p>
        Bienvenue chez <span>LOC DOC</span>, votre destination de premier choix pour une expérience de conduite exceptionnelle. Nous sommes spécialisés dans la location de voitures de luxe, classiques et de sport, offrant une combinaison inégalée d'élégance, de style et de performance.
    </p>
    <p>
        Notre flotte comprend une sélection exclusive de véhicules provenant des marques de luxe les plus emblématiques, ainsi que des modèles classiques intemporels qui ont marqué l'histoire de l'automobile. Que vous souhaitiez vivre la puissance brute d'une voiture de sport, la sophistication d'une berline de luxe ou le charme nostalgique d'une voiture ancienne, LOC DOC a ce qu'il vous faut.
    </p>
    <p>
        Nous nous engageons à fournir un service de première classe à nos clients, avec des options de location flexibles et un service clientèle dédié pour garantir que chaque aspect de votre expérience soit impeccable. Nos voitures sont soigneusement entretenues et préparées pour offrir une performance optimale et une conduite sécurisée.
    </p>
    <p>
        Explorez notre collection et découvrez comment LOC DOC peut transformer vos trajets en moments inoubliables. Que ce soit pour une occasion spéciale, un événement d'entreprise ou simplement pour le plaisir de conduire une voiture exceptionnelle, nous sommes là pour réaliser vos rêves de conduite.
    </p>
</div>
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
