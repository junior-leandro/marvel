import axios from 'axios';
import md5 from 'md5';


const privateKey = '73bcce'; // Aqui vai a API privada
const publicKey = 'c7ac60'; // Aqui vai a API publica

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts:time,
        apikey: publicKey,
        hash,
    },
});

export default api;