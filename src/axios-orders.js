import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-5a6ca.firebaseio.com'
});

export default instance;