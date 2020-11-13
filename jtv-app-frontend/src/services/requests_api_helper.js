import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export const getRequests = async () => {
    console.log("hitting helper")
    const resp = await api.get('/request/all')
    return resp
}