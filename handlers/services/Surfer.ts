import axiosInstance from "../api"

export const getSurfers = async () => {
    return await axiosInstance.get('/api/surfers');
}

export const getSurfer = async (id) => {
    return await axiosInstance.get(`/api/surfers/${id}`);
}

export const createSurfer = async (data) => {
    return await axiosInstance.post('/api/surfers', data);
}

export const updateSurfer = async (id, data) => {
    return await axiosInstance.put(`/api/surfers/${id}`, data);
}

export const deleteSurfer = async (id) => {
    return await axiosInstance.delete(`/api/surfers/${id}`);
}
