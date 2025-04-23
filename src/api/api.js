// src/api/api.js
import { createApiClient } from './client'

const api = createApiClient(import.meta.env.VITE_API_BASE_URL)

export const getAllCountries = () => api.get('/countries')
export const getCountryByName = (name) => api.get(`/countries/${name}`)
