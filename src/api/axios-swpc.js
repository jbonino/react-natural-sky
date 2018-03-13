import axios from "axios";

const instance = axios.create({
    baseURL: 'http://services.swpc.noaa.gov/'
})

export default instance;