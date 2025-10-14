<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from '~/components/ProductCard.vue'
import type { ResponseCard } from '~/interfaces/interfaces'

const page = ref(1) // Текущая страница
const limit = 10 // Товаров на страницу
const totalProducts = ref(100) // Общее количество товаров (из API или предполагаемое)

const skip = computed(() => (page.value - 1) * limit) // Вычисляем смещение для API
const totalPages = computed(() => Math.ceil(totalProducts.value / limit)) // Общее количество страниц

// Загружаем товары с API
const { data, pending, error } = await useFetch<ResponseCard>('https://dummyjson.com/products', {
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

<style scoped src="~/assets/css/Catalog.css"></style>