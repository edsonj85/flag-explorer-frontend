<template>
  <div class="grid grid-cols-4 gap-4 p-4">
    <CountryCard
        v-for="country in countries"
        :key="country.name"
        :country="country"
        @click="goToDetail(country.name)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllCountries } from '../api/api'
import CountryCard from '../components/CountryCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const countries = ref([])

onMounted(async () => {
  const res = await getAllCountries()
  countries.value = res.data
})

function goToDetail(name) {
  router.push(`/country/${name}`)
}
</script>
