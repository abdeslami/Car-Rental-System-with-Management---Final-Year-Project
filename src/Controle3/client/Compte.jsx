import React, { useState ,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';
import "./style.css"
import "./script.js"
import { useSelector,useDispatch } from 'react-redux';
import { DeleteVoiture } from '../Action.jsx';
export default function CompteClient() {
    	const { id } = useParams();
	document.addEventListener("DOMContentLoaded", function() {
		const hamBurger = document.querySelector(".toggle-btn");
	
		hamBurger.addEventListener("click", function () {
			document.querySelector("#sidebar").classList.toggle("expand");
		});
	});
	const voiture = useSelector(state => state.voiture.filter((v,i)=>v.user==id));
	

    const [data, setData] = useState([]);
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/utilisateur')
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

   data.find(value => String(value.id) === String(id));



    const DeleteV=(iad)=>{
    fetch(`http://127.0.0.1:3001/voiture/${iad}`,{
        method:"DELETE",
    })
    console.log(iad)
}
       
  return ( <>
   
			<div class="wrapper ">
        <aside id="sidebar" className='expand ' style={{height:"50rem"}} >
            
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
            <div   class="  sidebar-footer">
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
        return String(value.id) === String(id);
    })?.username}
</span>
                                <img src="../../page_admin_image/Power.png" class="avatar img-fluid" alt="" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-end rounded">
                                        <button type="button" class="btn btn-outline-danger">  <img src="../../page_admin_image/Power.png" alt="" / >Déconnexion</button>
                                      
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <main class="content px-5 py-4">
                <div class="container-fluid ">
                    <div class="mb-3 w-100 px-2">
                        <h3 class="fw-bold fs-4 mb-3 text-primary">Vous Voiture </h3>

	<div className="carsdisplay2">
                            {voiture.map((car, index) => (
                                <div class="cardvoiture" key={index}>
                                  

                                <div class="image">
                                    
                                <Link to={`/updatevoiture/${car.id}`} className='btn ' >Modifier</Link>
                                    <button onClick={()=>DeleteV(car.id)} style={{float:"right"}} class="btn">Supprimer  </button>
                                    <img src={`../../../uploads/${car.img}`} alt="" />
                                </div>

                                <div class="contentvoiture">
                                    <h2>{car.title}</h2>
                                    <p>
                                    <p>Price: {car.prevPrice} DH</p>
                                    <p>Class: {car.class}</p>
                                    <p>Color: {car.color}</p>


                                    </p>
                                  
                                    
                                </div>
                                </div>
                            ))}
                        </div>
	</div>
                       
                       
                </div>
            </main>
           
        </div>
    </div>
    
    </>
  )
}











// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Inscription() {
// 	const generateUniqueFileName = () => {
//         return `${Date.now()}_${Math.floor(Math.random() * 1000000)}.jpg`; 
//     };

// 	const uniqueFileName = generateUniqueFileName(); 
//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [image, setImage] = useState(null);
//     const navigate = useNavigate();

//     const handleUserRegistration = () => {
//         fetch('http://localhost:3001/utilisateur', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 image: uniqueFileName, // Assuming uniqueFileName is defined elsewhere
//                 username: username,
//                 email: email,
//             })
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Registration successful:', data);
//             alert('Registration successful!');
//             navigate(`/user/profile/${data.id}`);
//         })
//         .catch(error => {
//             console.error('Error during registration:', error);
//         });
//     };

//     const handleImageUpload = () => {
//         if (!image) {
//             alert('Please select an image.');
//             return;
//         }

//         const formData = new FormData();
//         // Generate a unique filename
// 		formData.append('image', image, uniqueFileName); // Append the image with the unique filename


//         fetch('http://localhost:3003/upload', {
//             method: "POST",
//             body: formData // Send the FormData object
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text(); // If you expect a response, you should parse it accordingly
//         })
//         .then(data => {
//             console.log('Image upload successful:', data);
//             alert('Image upload successful!');
//         })
//         .catch(error => {
//             console.error('Error during image upload:', error);
//         });
//     };

//     const handleSub = (e) => {
//         e.preventDefault();
//         handleUserRegistration();
//         handleImageUpload();
//     };

//     const handleImageChange = (e) => {
//         const selectedImage = e.target.files[0];
//         if (selectedImage) {
//             setImage(selectedImage);
//         }
//     };

 
//     return (
//         <div className='div'>
//             <h1>Image Upload</h1>
//             <form onSubmit={handleSub}>
//                 <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username*" />
//                 <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email*" />
//                 <input type="file" accept="image/*" onChange={handleImageChange} />
//                 <button type="submit">Upload Image</button>
//                 <p>
//                     Already have an account? <br/><Link to="/login">Login</Link>
//                 </p>
//             </form>
//         </div>
//     );
// }

