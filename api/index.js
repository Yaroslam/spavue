import axios from 'axios';




const axiosInstance = axios.create({
    baseUrl: 'http://demo-api.vsdev.space/api'
});

export default axiosInstance;
