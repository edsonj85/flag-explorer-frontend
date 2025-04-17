<template>
  <div class="border rounded p-2 cursor-pointer hover:shadow">
    <img :src="country.flag" alt="Flag" class="w-full h-32 object-cover" />
    <p class="text-center mt-2 font-semibold">{{ country.name }}</p>
  </div>
</template>

<script setup>
defineProps({ country: Object })
</script>
