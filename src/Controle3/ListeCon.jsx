
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteVoiture } from './Action.jsx';

export default function ListeCon() {
    const voiture = useSelector(state => state.voiture);
    const [rechere,setRecherch]=useState('')
    const [selecte,setSelecte]=useState('')
    const filterRecherch = voiture.filter(valeur => {
        const regex = new RegExp(rechere, 'i');
        return regex.test(valeur.color) || regex.test(valeur.prevPrice) || regex.test(valeur.title) || regex.test(valeur.class);
    });
    
    const filterSelecte = selecte ? voiture.filter(valeur => valeur.class === selecte) : voiture;
    const voitureT = filterRecherch.filter(car => filterSelecte.includes(car));
    
    const dispatch=useDispatch()

    return (
        <div>
               <div class="main">
        <div class="head">
            <div class="logo">
                <img src="logo.png" alt=""/>
            </div>
            <div class="nav">
                <div class="list">
                    <img src="email.png" alt=""/>
                    <p>
                        <b>For Support MAIL US :</b> <br/>
                        <a href="#"> support-loc-doc@gmail.com</a>
                    </p>
                </div>
                <div class="list">
                    <img src="telephone.png" alt=""/>
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
                    <a href="contact">CONTACT </a>


                </div>
                <div class="input">
                    <input type="text" placeholder="Search ... "/>
                    <img src="search.png" alt=""/>
                </div>
            </div>
            <div className="container mt-5">
                <h1 style={{visibility:"hidden"}}>List Cars</h1>
            </div>
            
<div className="container">
    <div className="row">
        <nav className="" style={{display: "flex", justifyContent: "space-around"}}>
            <input className="form-control w-25" type="search" placeholder="Search ...." aria-label="Search" onChange={(e)=>setRecherch(e.target.value)} />
            <div className="form-group">
                <select className="form-control" id="exampleFormControlSelect1" onChange={(e)=>setSelecte(e.target.value)}>
                    <option value="">Category de Voiture</option>
                    <option value="luxury">Luxury</option>
                    <option value="sport">Sport</option>
                    <option value="normal">Normal</option>
                    <option value="classic">Classic</option>
                </select>
            </div>
        </nav>
    </div>
</div>





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
