import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export const registerUser = async (registerData) => {
    const resp = await api.post('/auth/signup', registerData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    console.log(resp)
    return resp.data.user;
}

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    console.log("heyy")
    console.log(resp)
    return resp.data.user;
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');

    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data
    }
    return false;
}