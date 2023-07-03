import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import './style.css';


interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('/characters')
      .then(response => {
        setCharacters(response.data.data.results);

      })
      .catch(err => console.log(err));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get('characters', {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }

  }, [characters])
  return (
    <>
      <div className="container">
        <h1>BEM VINDO AO MUNDO MARVEL</h1>
        <p>Conheça os Heróis</p>

        <ul className='hero-ul'>
          {characters.map(character => {
            if (character.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
              return null;
            }
            return (

              <li key={character.id} className='hero-li'>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className='hero-thumbnail' alt={`Foto do${character.name}`} />
                <span className='name'>{character.name}</span>
              </li>

            )
          })}
        </ul>
        <button onClick={handleMore} className='btn'>VER MAIS</button>

      </div>
    </>
  );


};
export default Characters;
