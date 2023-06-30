import React, {useEffect, useState} from 'react';
import './style.css'
import api from '../../services/api';

const Characters: React.FC = () => {
    const [characters, setCharacters ] = useState([]);

    useEffect(() => {
        api
        .get('/characters')
        .then(response => {
            setCharacters(response.data.data);
            console.log(characters);
        })
        .catch(err => console.log(err));
    },[]);

    return (
    <div className='content'>
    <h1>Vite + React | Building Discovery Marvel</h1>
      <br />
    <button type="button" id="discovery">CLICK HERE FOR DISCOVERY</button>
  </div>
    );
};
export default Characters;
