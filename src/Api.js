import axios from 'axios';
import Storage from "./trialFolder/Storage";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});
// const $host = axios.create({
//     baseURL: process.env.REACT_APP_API_URL
// });
// const $authHost=axios.create({
//     baseURL: process.env.REACT_APP_API_URL
// })

api.interceptors.request.use((config) => {
    const token = Storage.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, Promise.resolve);

class Api {
//auth
    static registration(email, password) {
        return api.post('/user/register', {email, password,role:"ADMIN"});
    }

    static login(email, password) {
        return api.post('/user/login', {email, password});
    }

    static authCheck() {
        return api.get('/user/auth');
    }

    //types
    static getTypes() {
        return api.get('/type');
    }

    static getBrands() {
        return api.get('/brand');
    }
    //devices
    static getDevice() {
        return api.get('/device');
    }

    static getSingleDevice(id) {
        return api.get('/device/' + id)
    }
}

export default Api;
