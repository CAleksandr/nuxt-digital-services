<script setup lang="ts">
import { ref } from 'vue'

// Заглушка для популярных товаров (потом заменим на API)
const popularProducts = ref([
  { id: 1, title: 'Товар 1', price: 29.99, thumbnail: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Товар 2', price: 49.99, thumbnail: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Товар 3', price: 19.99, thumbnail: 'https://via.placeholder.com/150' },
])
</script>

<template>
  <div class="container">
    <header>
      <h1>X DIGIT Marketplace</h1>
      <p>Ваш надёжный маркетплейс услуг и оборудования для индустрии развлечений.</p>
    </header>
    <section>
      <h2>Популярные товары</h2>
      <div class="grid">
        <div v-for="product in popularProducts" :key="product.id" class="product-card">
          <img :src="product.thumbnail" :alt="product.title" />
          <h3>{{ product.title }}</h3>
          <p>Цена: ${{ product.price }}</p>
          <button>В корзину</button>
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
  height: 150px;
  object-fit: cover;
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