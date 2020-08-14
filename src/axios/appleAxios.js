import axios from 'axios';

const appleAxios = axios.create({
    baseURL: 'https://itunes.apple.com'
});

export default appleAxios;