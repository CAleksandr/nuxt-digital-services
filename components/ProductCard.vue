<script setup lang="ts">
defineProps<{
  product: { id: number; title: string; price: number; thumbnail: string }
}>()
</script>

<template>
  <div class="product-card">
    <img :src="product.thumbnail" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p>Price: ${{ product.price }}</p>
    <button>Add to Cart</button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card img {
  width: 100%;
  max-height: 150px;
  object-fit: contain;
  aspect-ratio: 1/1;
  border-radius: 4px;
}

.product-card h3 {
  font-size: 1.25rem;
  margin: 8px 0;
}

.product-card p {
  font-size: 1rem;
  color: #555;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>