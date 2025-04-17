
import axios from 'axios'

const api = axios.create({
    baseURL: '',
})

export const getAllCountries = () => api.get('/countries')
export const getCountryByName = (name) => api.get(`/countries/${name}`)
