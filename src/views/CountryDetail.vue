<template>
  <div v-if="country">
    <h2 class="text-2xl font-bold mb-2">{{ country.name }}</h2>
    <p>Population: {{ country.population.toLocaleString() }}</p>
    <p>Capital: {{ country.capital }}</p>
    <img :src="country.flag" alt="Flag" class="mt-4 w-40" />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCountryByName } from '../api/api.js'

const route = useRoute()
const country = ref(null)

onMounted(async () => {
  try {
    const response = await getCountryByName(route.params.name)
    country.value = response.data
  } catch (error) {
    console.error('Failed to load country details:', error)
  }
})
</script>


