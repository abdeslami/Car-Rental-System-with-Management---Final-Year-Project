
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useParams } from 'react-router-dom';
import { DeleteVoiture } from './Action.jsx';

export default function ContactVoiture() {
    
    const {id} =useParams()
    const voiture = useSelector(state => state.voiture);
    const voitureF=voiture.find((valeur)=>{
        return valeur.id == id
    })
   

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
                    <img src="search.png" alt="" />
                </div>
            </div><br /><br />
            <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div  class="card-header bg-primary  text-white text-center">
          Category  {voitureF.class}
        </div>
        <div class="card-body">
          <img src={voitureF.img} class="img-fluid mb-3" alt="Product Image" width='100%' />
          <h5 class="card-title text-center mb-3 h1">{voitureF.class.toUpperCase()}</h5>
          <p class="card-text"><strong>Description:</strong> {voitureF.title}</p>
          <p class="card-text"><strong>Price:</strong> {voitureF.prevPrice}</p>
          <p class="card-text"><strong>Category:</strong> {voitureF.category}</p>
          <p class="card-text"><strong>Color:</strong> {voitureF.color}</p>
          <p class="card-text"><strong>Model:</strong> {voitureF.start_production}</p>
          <Link to={'/contact'} style={{
    textAlign: "center",
    fontWeight: "bold",
    float: "right",
    fontSize: "20px",
    position: "relative",
    borderRadius: "15px",
    backgroundColor: "#2059EB",
    color: "aliceblue",
    width: "10rem",
    height: "3rem",
    fontFamily: "Arial"
}} className="btn btn-block mx-auto">Contact Nous</Link>

        </div>
      </div>
    </div>
  </div>
</div>
         
                        <div class="fouter">6
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
