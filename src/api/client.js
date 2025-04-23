// src/api/client.js
import axios from 'axios'

export const createApiClient = (baseURL) =>
    axios.create({
        baseURL,
    })
