
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { AjouterVoiture } from './Action.jsx';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AjouterCars() {
    const lenght=useSelector(state=>state.voiture)
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [classe, setClasse] = useState('');
    const [title, setTitle] = useState('');
    const [prevPrice, setPrevPrice] = useState('');
    const [img, setImg] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(AjouterVoiture([{
            id: lenght+1,
            class: classe,
            title: title,
            prevPrice: prevPrice,
            img: img,
        }]));

        setId('');
        setClasse('');
        setTitle('');
        setPrevPrice('');
        setImg('');
    }

    return (
        <div>
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
                    <a href="/contact">ABOUT US</a>
                    <a href="/listevoiture">CAR LISTING</a>
                    <a href="/contact">CONTACT </a>

                </div>
                <div class="input">
                    <input type="text" placeholder="Search ... "/>
                    <img src="search.png" alt=""/>
                </div>
            </div><br /><br />
            

            
<div className="container my-5" style={{ width: "100%" }}>
            <h1 className='text-center'>Ajouter Votre Voiture</h1>

  <form onSubmit={handleSubmit} className="row g-3">
  <div className="col-md-6">
      <label htmlFor="title" className="form-label">
        Title:
        <input id="title" type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
    </div>
    <div className="col-md-6">
      <label htmlFor="class" className="form-label">
        Class:
        <select className="form-control" id="exampleFormControlSelect1" >
                    <option value="" disabled>Category de Voiture</option>
                    <option value="luxury">Luxury</option>
                    <option value="sport">Sport</option>
                    <option value="normal">Normal</option>
                    <option value="classic">Classic</option>
                </select>
      </label>
    </div>

    <div className="col-md-6">
      <label htmlFor="prevPrice" className="form-label">
         Price cars:
        <input id="prevPrice" type="text" className="form-control" value={prevPrice} onChange={(e) => setPrevPrice(e.target.value)} />
      </label>
    </div>

    <div className="col-md-6">
      <label htmlFor="prevPrice" className="form-label">
         Date fabrigation:
        <input id="" type="date" className="form-control" value={prevPrice} onChange={(e) => setPrevPrice(e.target.value)} />
      </label>
    </div>
    <div className="col-md-6">
      <label htmlFor="prevPrice" className="form-label">
        Couleur de Voiture :
        <input id="" type="date" className="form-control" value={prevPrice} onChange={(e) => setPrevPrice(e.target.value)} />
      </label>
    </div>

    <div className="col-6">
      <label htmlFor="img" className="form-label">
        Upload Image :
        <input id="img" type="file" className="form-control" value={img} onChange={(e) => setImg(e.target.value)} />
      </label>
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary btn-block">Add Car</button>
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
           
        </div>
    );
}
