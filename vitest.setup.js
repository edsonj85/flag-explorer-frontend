// vitest.setup.js

// Mock import.meta.env globally for all tests
Object.defineProperty(import.meta, 'env', {
    value: {
        VITE_API_BASE_URL: 'http://localhost:8080' // or whatever default you need
    },
    writable: true
})
