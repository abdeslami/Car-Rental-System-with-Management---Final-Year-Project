import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import "./style.css"
import "./script.js"
import { DeleteVoiture } from '../Action.jsx';

export default function Profile() {
    const generateUniqueFileName = () => {
        return `${Date.now()}_${Math.floor(Math.random() * 1000000)}.jpg`;
    };
  const { id } = useParams();

    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [image, setImage] = useState(null);
    const [classe, setClasse] = useState('');
    const [title, setTitle] = useState('');
    const [prevPrice, setPrevPrice] = useState('');
    const [startProduction, setStartProduction] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/utilisateur')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(res => setData(res))
            .catch(error => console.error('Error fetching data:', error));
    }, []);



   

  const uniqueFileName = generateUniqueFileName();
    // Function to handle user registration
    const handleUserRegistration = () => {
       const filepath=`../../../uploads/${uniqueFileName}`
        fetch('http://localhost:3001/voiture', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: id,
                class: classe,
                title: title,
                prevPrice: prevPrice ,
                start_production: startProduction,
                color: color,
                img: filepath,
                username: username,
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Registration successful:', data);
            alert('Registration successful!');
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
    };

    const handleImageUpload = () => {
                if (!image) {
                    alert('Please select an image.');
                    return;
                }
        
                const formData = new FormData();
        		formData.append('image', image, uniqueFileName); 
        
        
                fetch('http://localhost:3003/upload', {
                    method: "POST",
                    body: formData 
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text(); 
                    
                })
                .then(data => {
                    console.log('Image upload successful:', data);
                    alert('Image upload successful!');
                })
                .catch(error => {
                    console.error('Error during image upload:', error);
                });
            };
        
            const handleSub = (e) => {
                e.preventDefault();
                handleUserRegistration();
                handleImageUpload();
            };
        
            const handleImageChange = (e) => {
                const selectedImage = e.target.files[0];
                if (selectedImage) {
                    setImage(selectedImage);
                }
            };

    return (
        <div className='mainn1'>
            <div class="wrapper" style={{height:"100vh"}}>
                <aside id="sidebar" className='expand'>
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
                    <Link to={`/user/profile/${id}`}class="sidebar-link">
                        <img src="../../page_admin_image/dashboard (1).svg" alt="" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li class="sidebar-item">
                    <Link to={`/user/ajouter/${id}`} class="sidebar-link">
                        <img src="../../page_admin_image/user-id-svgrepo-com (1).svg" alt="" />

                        <span> voiture</span>
                    </Link>
                </li>
                <li class="sidebar-item">
                    <Link to={`/user/voiture/${id}`} class="sidebar-link">
                        <img src="../../page_admin_image/user-profile-svgrepo-com.svg" alt="" />

                        <span> Comptes </span>
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
                        <div class="navbar-collapse collapse">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item dropdown">
                                    <a href="/" data-bs-toggle="dropdown" class="nav-icon pe-md-0">
                                        <span>
                                            {data.find((value, key) => {
                                                return String(value.id) === String(id) 
                                            })?.username}
                                        </span>
                                        <img src="../../page_admin_image/Power.png" class="avatar img-fluid" alt="" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end rounded">
                                        <button type="button" class="btn btn-outline-danger">
                                            <img src="../../page_admin_image/Power.png" alt="" />Déconnexion
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main class="content px-5 py-4">
                        <div class="container-fluid">
                            <div class="mb-3 w-100 px-5">
                                <h3 class="fw-bold fs-4 mb-3 text-primary">Bonjour , {data.find((value, key) => {
                                    return String(value.id) === String(id);
                                })?.username} </h3>
                                                    <h2 className="text-seccuss">Ajouter un Voiture </h2>
                       <form onSubmit={handleSub} className="row g-3 py-5">
  <div className="col-md-6">
      <label htmlFor="title" className="form-label">
        Title:
        <input id="title" type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
    </div>
    <div className="col-md-6">
      <label htmlFor="class" className="form-label">
        Class:
        <select className="form-control" id="exampleFormControlSelect1" value={classe} onChange={(e) => setClasse(e.target.value)} >
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
        <input id="prevPrice" type="number" className="form-control" value={prevPrice} onChange={(e) => setPrevPrice(e.target.value)} />
      </label>
    </div>

    <div className="col-md-6">
      <label htmlFor="prevPrice" className="form-label">
         Date fabrigation:
        <input id="" type="date" className="form-control" value={startProduction} onChange={(e) => setStartProduction(e.target.value)} />
      </label>
    </div>
    <div className="col-md-6">
      <label htmlFor="prevPrice" className="form-label">
        Couleur de Voiture :
        <select className="form-control" id="exampleFormControlSelect1" value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="" disabled>Couleur de Voiture</option>
                    <option value="red">red</option>
                    <option value="white">white</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                    <option value="gray">gray</option>
                    <option value="green">green</option>
                    <option value="orange">orange</option>
                    <option value="pink">pink</option>
                    <option value="yellow">yellow</option>

                </select>
      </label>
    </div>

    <div className="col-6">
      <label htmlFor="img" className="form-label">
        Upload Image :
        <input type="file" accept="image/*"  className='form-control' onChange={handleImageChange} />
      </label>
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary btn-block">Add Car</button>
    </div>
  </form>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
