import React, { useState,useEffect } from 'react';
import { Link ,useHistory } from 'react-router-dom';
import api from '../../services/api'


import './styles.css'

export default function Message() {
    function handleChoice(){
        
    };

    const [problem, setProblem] = useState([]);
    useEffect(() => {
        api.get('references').then(response => {
            setProblem(response.data);
        })
    }, []);
    return (
        <div className="home-container">
            <h1 className="text">Mágica da T.I.</h1>
            <div className='list'>
                <form onSubmit={handleChoice}>
                    {problem.map(problem =>(
                            <button>
                                {problem.problem}
                            </button> 
                    ))}
                            <Link to ="\message">
                            <button type="submit">Enviar</button>
                            </Link>
                </form>
                
            </div>
        </div>
    );
}

