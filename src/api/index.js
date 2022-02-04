import axios from 'axios';




const axiosInstance = axios.create({
    baseUrl: 'https://demo-api.vsdev.space/api'
});

export default axiosInstance;
