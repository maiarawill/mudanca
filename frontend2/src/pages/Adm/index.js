import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api'

export default function Adm() {
    const [incidents, setIncidents] =  useState([]);
    useEffect(() => {
        api.get('incidents').then(response =>{
            setIncidents(response.data)
        })
    },[])

    return (
        <div className="home-container">
            <h1 className="text">Mágica da T.I.</h1>
            <div className='list'>
                {incidents.map(incidents => (
                    <div className="teste">
                        <p>Usuário: {incidents.user} </p>
                        <p>Problema: {incidents.problem} </p>
                        <p>Patrimônio: {incidents.asset} </p>
                        <p>Sala: {incidents.room} </p>
                        <p>Ramal: {incidents.extension} </p>
                    </div>      
                ))}

            </div>
            
        </div>
    );
}

