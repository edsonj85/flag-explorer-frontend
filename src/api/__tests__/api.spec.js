import axios from 'axios'
import { createApiClient } from '../client'

jest.mock('axios')

describe('createApiClient', () => {
    const mockGet = jest.fn()

    beforeEach(() => {
        axios.create.mockReturnValue({ get: mockGet })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('fetches all countries', async () => {
        const mockData = { data: [{ name: 'France' }] }
        mockGet.mockResolvedValue(mockData)

        const api = createApiClient('http://localhost:8080')
        const result = await api.get('/countries')

        expect(mockGet).toHaveBeenCalledWith('/countries')
        expect(result).toEqual(mockData)
    })

    it('fetches country by name', async () => {
        const mockData = { data: { name: 'Japan' } }
        mockGet.mockResolvedValue(mockData)

        const api = createApiClient('http://localhost:8080')
        const result = await api.get('/countries/Japan')

        expect(mockGet).toHaveBeenCalledWith('/countries/Japan')
        expect(result).toEqual(mockData)
    })
})
