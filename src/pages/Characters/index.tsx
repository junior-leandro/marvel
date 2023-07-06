import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import { Container, CardList, Card, ButtonMore, LogoHeader } from './styles';

import logo from '../../assets/images/logo-marvel.png';

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
    <Container>
      <LogoHeader>
        <img src={logo} alt="Logo da Marvel" id="logo-marvel" />
      </LogoHeader>
      <CardList>
        {characters.map(character => {
          if (character.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" || character.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif") {
            return null;
          }
          return (
            <Card key={character.id}>
              <img id="image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className='hero-thumbnail' alt={`Foto do${character.name}`} />
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </Card>
          );
        })};
      </CardList>
      <ButtonMore onClick={handleMore}>
        Carregar Mais Personagens
      </ButtonMore>
    </Container>
  );
};
export default Characters;
