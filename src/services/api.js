import axios from 'axios';

//URL DA API: https://api.themoviedb.org/3/configuration

// base URL da API

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
