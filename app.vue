<!-- app.vue -->
<script setup lang="ts">
import { useCart } from '~/interfaces/interfaces'
useCart() // Инициализация корзины
</script>

<template>
  <NuxtPage />
</template>

<style>
/* Глобальные стили, если нужны */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f9f9f9;
}
</style>