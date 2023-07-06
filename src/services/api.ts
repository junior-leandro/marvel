import axios from 'axios';
import md5 from 'md5';


const privateKey = '73bcce754639cfa9a33362e01d83b7848aeed6c1'; // Aqui vai a API privada
const publicKey = 'c7ac60c6ca26bb1ff080e8c57e2c15e9'; // Aqui vai a API publica

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
        ts:time,
        apikey: publicKey,
        hash,
        limit:64,
    },
});

export default api;