<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Product } from '~/interfaces/interfaces'

const route = useRoute()
const productId = route.params.id // Получаем ID из URL

// Загружаем данные о товаре
const { data, pending, error } = await useFetch<Product>(`https://dummyjson.com/products/${productId}`)
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
        <img
          :src="data?.thumbnail"
          :alt="data?.title"
          class="product-image"
        >
        <p class="description">{{ data?.description }}</p>
        <p class="price">Price: ${{ data?.price }}</p>
        <button>Add to Cart</button>
      </div>
    </section>
  </div>
</template>

<style scoped src="~/assets/css/ProductDetails.css"></style>