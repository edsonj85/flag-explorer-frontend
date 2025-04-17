
import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const getAllCountries = () => api.get('/countries')
export const getCountryByName = (name) => api.get(`/countries/${name}`)
