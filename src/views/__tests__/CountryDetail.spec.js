import { mount, flushPromises } from '@vue/test-utils'
import CountryDetail from '../CountryDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import * as api from '@/api/api'


// Mock the API function
jest.mock('@/api/api', () => ({
    getCountryByName: jest.fn(),
}));

describe('CountryDetail.vue', () => {
    it('renders country details after API call', async () => {
        // Arrange
        const mockCountry = {
            name: 'Canada',
            population: 38000000,
            capital: 'Ottawa',
            flag: 'https://flagcdn.com/ca.svg'
        }
        api.getCountryByName.mockResolvedValueOnce({ data: mockCountry })

        const router = createRouter({
            history: createWebHistory(),
            routes: [
                {
                    path: '/countries/:name',
                    component: CountryDetail
                }
            ]
        })

        router.push('/countries/Canada')
        await router.isReady()

        // Act
        const wrapper = mount(CountryDetail, {
            global: {
                plugins: [router]
            }
        })

        await flushPromises()

        // Assert
        expect(wrapper.text()).toContain('Canada')
        expect(wrapper.text()).toContain('Ottawa')
        expect(wrapper.text()).toContain('38,000,000')
        expect(wrapper.find('img').attributes('src')).toBe(mockCountry.flag)
    })
})
