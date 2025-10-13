<script setup lang="ts">
import type { ResponseCard } from '~/interfaces/interfaces'
const { data, pending, error } = await useFetch<ResponseCard>('https://dummyjson.com/products?limit=6')
</script>

<template>
  <div class="container">
    <header>
      <h1>FunZone Marketplace</h1>
      <p>Your reliable marketplace for entertainment industry services and equipment.</p>
    </header>
    <section>
      <h2>Popular Products</h2>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else class="grid">
        <ProductCard v-for="product in data?.products" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

header {
  text-align: center;
  margin-bottom: 32px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}

h2 {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 16px;
}

p {
  font-size: 1.1rem;
  color: #333;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>