<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <h1 class="text-2xl font-bold text-center">🌍 Flag Explorer App</h1>
    </header>

    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// No logic needed for now
</script>

<style>
/* Optional global styles */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
}
</style>
