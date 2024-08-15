import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateVoiture } from './Action.jsx';
import { Link, useParams } from 'react-router-dom';

export default function ModifierVoiture() {
    const { id } = useParams();
    const voiture = useSelector(state => state.voiture);

    const dispatch = useDispatch();
    const [classe, setClasse] = useState('');
    const [title, setTitle] = useState('');
    const [prevPrice, setPrevPrice] = useState('');
    const [img, setImg] = useState('');
    
    useEffect(() => {
        const vor = voiture.find(valeur => valeur.id == id);
        setClasse(vor.class);
        setTitle(vor.title);
        setPrevPrice(vor.prevPrice);
        setImg(vor.img);
    }, [id, voiture]);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(UpdateVoiture({
            id: id,
            class: classe,
            title: title,
            prevPrice: prevPrice,
            img: img,
        }));
        setClasse('');
        setTitle('');
        setPrevPrice('');
        setImg('');
    }

    return (
        <div className="container mt-5">
            <h2>Modifier Car</h2>
            <Link to='/'>Acceuil</Link>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="class" className="form-label">Class:</label>
                    <input type="text" className="form-control" id="class" value={classe} onChange={(e) => setClasse(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="prevPrice" className="form-label">Previous Price:</label>
                    <input type="text" className="form-control" id="prevPrice" value={prevPrice} onChange={(e) => setPrevPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Image URL:</label>
                    <input type="text" className="form-control" id="img" value={img} onChange={(e) => setImg(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Modifier Car</button>
            </form>
        </div>
    );
}
