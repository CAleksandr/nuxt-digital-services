<script setup lang="ts">
const { data, pending, error } = await useFetch('https://dummyjson.com/products?limit=6')
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
        <div v-for="product in data?.products" :key="product.id" class="product-card">
          <img :src="product.thumbnail" :alt="product.title" />
          <h3>{{ product.title }}</h3>
          <p>Price: ${{ product.price }}</p>
          <button>Add to Cart</button>
        </div>
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
  object-fit: contain; /* Изображение целиком, без обрезки */
  aspect-ratio: 1/1; /* Квадратный контейнер */
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