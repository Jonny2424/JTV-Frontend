import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
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
  