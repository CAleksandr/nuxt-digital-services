<script setup lang="ts">
import type { Product} from '~/interfaces/interfaces';
import { useCart } from '~/interfaces/interfaces'

const props = defineProps<{ product: Product }>()
const { addToCart } = useCart()

const handleAddToCart = () => {
  addToCart({
    id: props.product.id,
    title: props.product.title,
    price: props.product.price,
    thumbnail: props.product.thumbnail
  })
}
</script>

<template>
  <div class="card">
    <NuxtLink :to="`/products/${product.id}`">
      <img :src="product.thumbnail" :alt="product.title" class="card-image" />
    </NuxtLink>
    <h3>{{ product.title }}</h3>
    <p class="price">Price: ${{ product.price }}</p>
    <button @click="handleAddToCart">Add to Cart</button>
  </div>
</template>

<style scoped src="~/assets/css/ProductCard.css"></style>