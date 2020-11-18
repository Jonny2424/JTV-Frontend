import axios from 'axios';
// API calls for the requests data tables
const api = axios.create({
    baseURL: "https://jtv-auto-detail.herokuapp.com"
})

export const getRequests = async () => {
    const resp = await api.get('/request/all')
    return resp
}

export const destroyRequest = async (id) => {
    await api.delete(`/request/${id}`);
  }

export const putRequest = async (requestId, requestData) => {
    const resp = await api.put(`/request/${requestId}`, requestData);
    return resp.data;
  }

export const postRequest = async (requestData) => {
    const resp = await api.post('/contact', requestData);
    return resp.data;
  }
  