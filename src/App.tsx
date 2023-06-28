
import './App.css';
import axios from 'axios';
import md5 from 'md5';
import { useEffect } from 'react';


const publicKey = 'process.env.PUBLIC_KEY';
const privateKey = 'process.env.PRIVATE_KEY';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

console.log(privateKey);


 const App: React.FC = () => {
  useEffect(() => {
  axios
  .get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`,
  )
  .then (response => console.log(response.data.data))
  .catch(err => console.log(err));
 },[]);
  return ( 
  <>
    <div className='content'>
      <h1>Vite + React | Building Discovery Marvel</h1>
        <br />
      <button type="button" id="discovery">CLICK HERE FOR DISCOVERY</button>
    </div>
  </>
  );
};

export default App
