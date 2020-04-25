import React, { useState,useEffect } from 'react';
import { Link ,useHistory } from 'react-router-dom';
import api from '../../services/api'


import './styles.css'

export default function Home() {
    const [id_ordinal_reference, setId_Ordinal_Reference] = useState('');
    const history = useHistory();

    async function handleHome(e) {
        e.preventDefault();  

        try {
            const response = await api.post('references', { id_ordinal_reference });

            localStorage.setItem('id_ordinal_reference', id_ordinal_reference)
            localStorage.setItem('problem', response.data.problem);

            history.push('/choice');

        }catch (err){
            alert('Deu merda')
        }
    }

    const [problems, setProblems] = useState([]);
    useEffect(() => {
        api.get('ordinalReferences').then(response => {
            setProblems(response.data);
        })
    }, []);

    return (
        <div className="home-container">
            <h1 className="text">Mágica da T.I.</h1>
            <div className='list'>
                <ul onSubmit={handleHome}>
                    {problems.map(problems =>(
                        <li>
                            <Link to='/choice'>
                            <button value={problems.id_ordinal_reference}
                                onChange={e => setId_Ordinal_Reference(e.target.value)} 
                                type="submit">
                                {problems.problems}
                            </button>
                            </Link>
                        </li>  
                    ))}
                    
                </ul>
                
            </div>
            
        </div>
    );
}