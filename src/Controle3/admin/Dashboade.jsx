import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const [username,setUsername]=useState('');
  const { id } = useParams();

    const voiture = useSelector(state => state.voiture);

    const users=useSelector(state => state.utilisateur);

  

    useEffect(() => {
        const chartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        // Chart 1: Bar chart
        const ctx1 = document.getElementById('myChart1').getContext('2d');
        const chart1 = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['luxy', 'sport', 'classique', 'normal',],
                datasets: [{
                    label: '# Voiture',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: chartOptions
        });

        // Chart 2: Line chart
        const ctx2 = document.getElementById('myChart2').getContext('2d');
        const chart2 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Visiteur',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: chartOptions
        });

        // Chart 3: Doughnut chart
        const ctx3 = document.getElementById('myChart3').getContext('2d');
        const chart3 = new Chart(ctx3, {
            type: 'doughnut',
            data: {
                labels: ['visiteur', 'client(propriétaire)', 'client'],
                datasets: [{
                    label: 'louer',
                    data: [30, 30, 40],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)'
                    ]
                }]
            },
            options: chartOptions
        });

        return () => {
            chart1.destroy();
            chart2.destroy();
            chart3.destroy();
        };
    }, []);

    return (
        <>
            <div className="wrapper" style={{ height: '100rem' }}>
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

                        <span> Voitures</span>
                    </Link>
                </li>
                <li class="sidebar-item">
                    <Link to={`/admin/utilisateurs/${id}`} class="sidebar-link">
                        <img src="../../page_admin_image/user-profile-svgrepo-com.svg" alt="" />

                        <span> Utilisateurs </span>
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
                <div className="main">
                    <nav className="navbar navbar-expand px-4 py-3">
                        <form action="#" className="d-none d-sm-inline-block"></form>
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <a href="/" data-bs-toggle="dropdown" className="nav-icon pe-md-0">
                                        <span>Bonjour {username}</span>
                                        <img src="../../page_admin_image/Power.png" className="avatar img-fluid" alt="" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end rounded">
                                        <button type="button" className="btn btn-outline-danger">
                                            <img src="../../page_admin_image/Power.png" alt="" />Déconnexion
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="w-50 px-5 py-4" style={{ display: 'grid',alignItems:"center", gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
    {/* Canvas elements to render the charts */}
    <canvas id="myChart1" width="400" height="400"></canvas>
    <canvas id="myChart2" width="400" height="400"></canvas>
    <div className="py-5 px-5 mx-auto">
    <canvas id="myChart3" width="400"  height="400"></canvas>

    </div>

</main>


                </div>
            </div>
        </>
    );
}
