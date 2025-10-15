<script setup lang="ts">
import { useCart } from '~/interfaces/interfaces'

const { items, updateQuantity, removeFromCart, totalPrice } = useCart()
</script>

<template>
  <div class="container">
    <header>
      <h1>FunZone Marketplace - Cart</h1>
      <p>Review and manage items in your cart.</p>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/products">Catalog</NuxtLink>
    </header>
    <section>
      <h2>Your Cart</h2>
      <div v-if="items.length === 0" class="empty-cart">
        Your cart is empty.
      </div>
      <div v-else class="cart-items">
        <div v-for="item in items" :key="item.id" class="cart-item">
          <img :src="item.thumbnail" :alt="item.title" class="cart-item-image" >
          <div class="cart-item-details">
            <h3>{{ item.title }}</h3>
            <p>Price: ${{ item.price }}</p>
            <div class="quantity-control">
              <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
              <input
                v-model.number="item.quantity"
                type="number"
                min="1"
                @input="updateQuantity(item.id, item.quantity)"
              >
              <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            </div>
            <p>Total: ${{ item.price * item.quantity }}</p>
            <button class="remove-button" @click="removeFromCart(item.id)">Remove</button>
          </div>
        </div>
        <div class="cart-total">
          <h3>Total Price: ${{ totalPrice }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="~/assets/css/Cart.css"></style>