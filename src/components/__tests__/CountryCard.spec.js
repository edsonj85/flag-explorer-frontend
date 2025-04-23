import { mount } from '@vue/test-utils'
import CountryCard from '@/components/CountryCard.vue'

describe('CountryCard.vue', () => {
    it('renders country flag and name', () => {
        // Arrange: mock country data
        const mockCountry = {
            name: 'Canada',
            flag: 'https://flagcdn.com/ca.svg'
        }

        // Act: mount the component with the mock data as a prop
        const wrapper = mount(CountryCard, {
            props: {
                country: mockCountry
            }
        })

        // Assert: check if flag image source and country name are rendered correctly
        expect(wrapper.find('img').attributes('src')).toBe(mockCountry.flag)
        expect(wrapper.find('p').text()).toBe(mockCountry.name)
    })

    it('applies the correct class to the image', () => {
        const mockCountry = {
            name: 'Canada',
            flag: 'https://flagcdn.com/ca.svg'
        }

        const wrapper = mount(CountryCard, {
            props: {
                country: mockCountry
            }
        })

        // Assert: check if the correct image class is applied
        expect(wrapper.find('img').classes()).toContain('w-full')
        expect(wrapper.find('img').classes()).toContain('h-32')
    })
})
