<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from '~/components/ProductCard.vue'

const page = ref(1) // Текущая страница
const limit = 10 // Товаров на страницу
const totalProducts = ref(100) // Общее количество товаров (из API или предполагаемое)

const skip = computed(() => (page.value - 1) * limit) // Вычисляем смещение для API
const totalPages = computed(() => Math.ceil(totalProducts.value / limit)) // Общее количество страниц

// Загружаем товары с API
const { data, pending, error } = await useFetch('https://dummyjson.com/products', {
  query: { limit, skip }
})

// Обновляем totalProducts из API, если доступно
watch(data, (newData) => {
  if (newData?.total) {
    totalProducts.value = newData.total
  }
})

const goToPage = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    page.value = newPage
  }
}
</script>

<template>
  <div class="container">
    <header>
      <h1>FunZone Marketplace - Catalog</h1>
      <p>Browse our full range of entertainment industry products.</p>
    </header>
    <section>
      <h2>All Products</h2>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else class="grid">
        <ProductCard v-for="product in data?.products" :key="product.id" :product="product" />
      </div>
      <div v-if="data?.products" class="pagination">
        <button :disabled="page === 1" @click="goToPage(page - 1)">Previous</button>
        <button
          v-for="p in totalPages"
          :key="p"
          :class="{ active: p === page }"
          @click="goToPage(p)"
        >
          {{ p }}
        </button>
        <button :disabled="page === totalPages" @click="goToPage(page + 1)">Next</button>
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

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.pagination button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination button.active {
  background-color: #0056b3;
  font-weight: bold;
}

.pagination button:hover:not(:disabled) {
  background-color: #0056b3;
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