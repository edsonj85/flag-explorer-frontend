import { mount, flushPromises } from '@vue/test-utils'
import Home from '../Home.vue'
import * as api from '@/api/api'

// Mock the API module
jest.mock('@/api/api', () => ({
    getAllCountries: jest.fn(),
}));

describe('Home.vue', () => {
    it('renders countries fetched from API', async () => {
        // Arrange
        const mockCountries = [
            {
                name: 'Japan',
                flag: 'https://flagcdn.com/jp.svg'
            },
            {
                name: 'Germany',
                flag: 'https://flagcdn.com/de.svg'
            }
        ]

        api.getAllCountries.mockResolvedValueOnce({ data: mockCountries })

        // Act
        const wrapper = mount(Home)
        await flushPromises()

        // Assert
        expect(wrapper.text()).toContain('Japan')
        expect(wrapper.text()).toContain('Germany')

        const flagImages = wrapper.findAll('img')
        expect(flagImages).toHaveLength(2)
        expect(flagImages[0].attributes('src')).toBe(mockCountries[0].flag)
        expect(flagImages[1].attributes('src')).toBe(mockCountries[1].flag)
    })
})
