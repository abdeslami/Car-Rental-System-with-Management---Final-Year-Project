import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AjouterVoiture } from './Action.jsx';
import ListeCon from './ListeCon.jsx';
import AjouterCars from './AjouterCars.jsx';
import './Style.css';
import ModifierVoiture from './ModifierVoiture.jsx';
import Login from './Login.jsx';
import Details from './Details.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import ContactVoiture from './ContactVoiture.jsx';
import Profile from './client/Profile';
import AjouterClient from './client/AjouterClient.jsx';
import CompteClient from './client/Compte.jsx';
import UpdateVoiture from './client/UpdateVoiture.jsx';
import Dashboad from './admin/Dashboade.jsx';
import FormEditUtilisateur from './admin/FormEditUtilisateur.jsx';
import Tutilisateur from './admin/Utilisateur.jsx';
import Tvoiture from './admin/Tvoiture.jsx';
import FormEditVoiture from './admin/FormEditVoiture.jsx';
import TContact from './admin/TContact.jsx';


export default function AppControle() {
    const [data, setData] = useState([]);
    const [dataU,setDataU]=useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:3001/voiture')
            .then(res => res.json())
            .then(res => setData(res))
    }, []);
    useEffect(() => {
        fetch('http://localhost:3001/utilisateur')
            .then(res => res.json())
            .then(res => setDataU(res))
    }, []);

    useEffect(() => {
        dispatch(AjouterVoiture(data));
        dispatch({type:"filluser",payload:dataU});

    }, [data]);

    return (
        <Router>
            <Routes>
                <Route path="/listevoiture" element={<ListeCon />} />
                <Route path="/ajouter" element={<AjouterCars />} />
                <Route path="/modifier/:id" element={<ModifierVoiture />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactvoiture/:id" element={<ContactVoiture />} />
                <Route path="/updatevoiture/:id" element={<UpdateVoiture /> } />

                <Route path="/" element={<Login />} />
                <Route path="/user/profile/:id" element={<Profile />} />
                <Route path="/user/ajouter/:id" element={<AjouterClient />} />
                <Route path="/user/voiture/:id" element={<CompteClient />} />
                <Route path="/admin/:id" element={ <Dashboad />} />
                <Route path="/admin/utilisateur/:id" element={ <FormEditUtilisateur />} />
                <Route path="/admin/utilisateurs/:id" element={ < Tutilisateur />} />
                <Route path="/admin/voitures/:id" element={ < Tvoiture />} />
                <Route path="/admin/voiture/:id" element={ <FormEditVoiture />} />
                <Route path="/admin/contact/:id" element={ <TContact />} />
                
                






            </Routes>
        </Router>
    );
}
