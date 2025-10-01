<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id // Получаем ID из URL

// Загружаем данные о товаре
const { data, pending, error } = await useFetch(`https://dummyjson.com/products/${productId}`)

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
          <button :disabled="currentImageIndex === 0" @click="prevImage" class="carousel-button prev">Previous</button>
          <img
            :src="data?.images[currentImageIndex]"
            :alt="`Image ${currentImageIndex + 1} of ${data?.title}`"
            class="product-image"
          />
          <button
            :disabled="currentImageIndex === (data?.images.length ?? 0) - 1"
            @click="nextImage"
            class="carousel-button next"
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

.product-details {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.carousel {
  position: relative;
  margin-bottom: 16px;
}

.product-image {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  aspect-ratio: 1/1;
  border-radius: 8px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.carousel-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}

.carousel-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.description {
  margin-bottom: 16px;
  line-height: 1.5;
}

.price {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 16px;
}

button:not(.carousel-button) {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
}

button:not(.carousel-button):hover {
  background-color: #0056b3;
}

/* Адаптивность */
@media (max-width: 768px) {
  .product-image {
    max-height: 200px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .carousel-button {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>