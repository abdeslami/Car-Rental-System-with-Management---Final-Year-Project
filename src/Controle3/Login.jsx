import React, { useState } from 'react';
import Registre from './Registre.jsx';
import Incription from './Incription.jsx';
import { Link } from 'react-router-dom';

export default function Login() {
    const [inscrption, setInscription] = useState(false);
    const [registre, setRegistre] = useState(false);
    const [afficher, setAfficher] = useState(false);

    function handleInsciption() {
        return inscrption && <Incription />;
    }
    
    function handleRegistre() {
        return registre && <Registre />;
    }

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
                    <div class="button">
                        <button onClick={() => {
                            setAfficher(!afficher);
                            setInscription(true);
                            setRegistre(false);
                        }}>REGISTRE </button>

                        <button onClick={() => {
                            setAfficher(!afficher);
                            setRegistre(true);
                            setInscription(false);
                        }}>LOGIN</button>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="liste">
                    <a href="/">HOME</a>
                    <a href="/about">ABOUT US</a>
                    <a href="/listevoiture">CAR LISTING</a>
                    <a href="/contact">CONTACT </a>
                </div>
                <div class="input">
                    <input type="text" placeholder="Search ... "/>
                    <img src="search.png" alt=""/>
                </div>
            </div>

            <div class="section1">
                {afficher && registre ? handleRegistre() : null}
                {afficher && inscrption ? handleInsciption() : null}
                <div>
                    <h2 class="h1">FIND THE RIGHT</h2>
                    <h2> CAR FOR YOU.</h2>
                    <p>We have more than a thousand cars for you to choose.</p>
                    <button><a href="#e" className='text-white'>Read More</a></button>
                </div>
            </div>

            <div class="section2">
                <p>
                    Welcome to <span>LOC DOC</span>, your premier destination for an exceptional driving experience. With our exclusive range of luxury, classic, and sports cars, we offer unparalleled elegance, style, and performance. From iconic luxury brands to timeless classics.
                </p>
            </div>

            <div class="content">
                <h2> <span>Find the Best </span> Cars </h2>
                <div class="card">
                    <div class="card1">
                        <img src="supra5.jpg" alt=""/>
                        <h1>Cars Sport </h1>
                        <p>From iconic Normal brands to timeless Sport</p>
                        <button> <Link style={{textDecoration:"none",color:'white'}} to="/details/sport" >Subscribe</Link> </button>
                    </div>
                    <div class="card1">
                        <img src="cars1.jpg" alt=""/>
                        <h1>Cars Normal </h1>
                        <p>From iconic Normal brands to timeless classics</p>
                        <button><Link style={{textDecoration:"none",color:'white'}} to="/details/normal" >Subscribe</Link></button>
                    </div>
                    <div class="card1">
                        <img src="cars2.jpg" alt=""/>
                        <h1>Cars Luxaury </h1>
                        <p>From iconic luxaury brands to timeless classics</p>
                        <button><Link style={{textDecoration:"none",color:'white'}} to="/details/luxury" >Subscribe</Link></button>
                    </div>
                    <div class="card1">
                        <img src="cars3.jpg" alt=""/>
                        <h1>Cars Classic </h1>
                        <p>From iconic Classic brands to timeless classics</p>
                        <button><Link  style={{textDecoration:"none",color:'white'}} to="/details/classic" >Subscribe</Link></button>
                    </div>
                </div>
            </div>

            <div class="fouter" id='e'>
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
                <h3 >Copyright@<span>loc-doc</span> 2023</h3>
            </div>
        </div>
    );
}
