<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Product } from '~/interfaces/interfaces'

const route = useRoute()
const productId = route.params.id // Получаем ID из URL

// Загружаем данные о товаре
const { data, pending, error } = await useFetch<Product>(`https://dummyjson.com/products/${productId}`)

// Реактивная переменная для текущего изображения в карусели
const currentImageIndex = ref(0)

// Функции для переключения изображений
const nextImage = () => {
  if (data.value?.images && currentImageIndex.value < data.value.images.length - 1) {
    currentImageIndex.value++
  }
}
const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}
</script>

<template>
  <div class="container">
    <header>
      <h1>FunZone Marketplace - Product Details</h1>
      <p>Explore the details of your selected product.</p>
    </header>
    <section>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else class="product-details">
        <h2>{{ data?.title }}</h2>
        <div class="carousel">
          <button :disabled="currentImageIndex === 0" class="carousel-button prev" @click="prevImage">Previous</button>
          <img
            :src="data?.images[currentImageIndex]"
            :alt="`Image ${currentImageIndex + 1} of ${data?.title}`"
            class="product-image"
          >
          <button
            :disabled="currentImageIndex === (data?.images.length ?? 0) - 1"
            class="carousel-button next"
            @click="nextImage"
          >
            Next
          </button>
        </div>
        <p class="description">{{ data?.description }}</p>
        <p class="price">Price: ${{ data?.price }}</p>
        <button>Add to Cart</button>
      </div>
    </section>
  </div>
</template>

<style scoped src="~/assets/css/ProductDetails.css"></style>