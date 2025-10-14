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

<style scoped src="~/assets/css/Home.css"></style>