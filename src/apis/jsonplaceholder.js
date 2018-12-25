import axios from 'axios';

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    headers: {
        "Access-Control-Allow-Origin":"*"
    } 
});