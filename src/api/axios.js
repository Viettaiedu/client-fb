import axios from 'axios';
const httpsRequest = axios.create({
    baseURL:"http://localhost:5500/api",
    withCredentials: true,
})

export default httpsRequest;