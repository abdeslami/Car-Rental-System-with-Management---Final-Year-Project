import React, { useState ,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import { DeleteVoiture } from '../Action.jsx';
export default function Tutilisateur() {

  function handleSupprimer(idd){
    let elete=window.confirm("veuillez vraiment supprimer utilisateur")
  if(elete){
    fetch('http://localhost:3001/utilisateur/'+idd,{
  method:"DELETE"
})}


alert('Utilisateur Supprimer Bien')

  }
	const voiture = useSelector(state => state.voiture);
	const [rechere,setRecherch]=useState('')
    const [selecte,setSelecte]=useState('')
    const filterRecherch = voiture.filter(valeur => {
        const regex = new RegExp(rechere, 'i');
        return regex.test(valeur.color) || regex.test(valeur.prevPrice) || regex.test(valeur.title) || regex.test(valeur.class);
    });
    
    const filterSelecte = selecte ? voiture.filter(valeur => valeur.class === selecte) : voiture;
    const voitureT = filterRecherch.filter(car => filterSelecte.includes(car));
    
	const { id } = useParams();
    const [data, setData] = useState([]);
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/utilisateur')
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

 console.log ( data.find(value => String(value.id) === String(id))
)

       
  return ( <>
   
			<div class="wrapper" style={{height:"100rem"}} >
        <aside id="sidebar" className='expand' style={{position:"fixe"}}>
            
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
            
<div
  class="table-responsive"
>
  <table
    class="table table-striped table-hover table-borderless table-primary align-middle"
  >
    <thead class="table-light">
      <caption>
        Table Utilisateur
      </caption>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      {
        data.map((values,index)=>{
          return <tr
          class="table-primary"
        >
          <td scope="row"> {values.id} </td>
          <td scope="row"> {values.username} </td>
          <td scope="row"> {values.email} </td>
          <td scope="row"> {values.role} </td>

          <td>
            <a href={`/admin/utilisateur/${values.id}`} >
          <i class="lni lni-cogs"></i>

            </a>
          <a href="">
          <i onClick={()=>handleSupprimer(values.id)}  class="lni lni-trash-can"></i> 
         
          </a>

          </td>

          
        </tr>
        })
      }
   
    </tbody>
    <tfoot>
      
    </tfoot>
  </table>
</div>

                       
            </main>
           
        </div>
    </div>
    
    </>
  )
}






