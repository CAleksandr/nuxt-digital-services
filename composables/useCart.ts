import { ref, computed } from 'vue'
import type { Product } from '~/interfaces/interfaces'

export interface CartItem {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
}

const items = ref<CartItem[]>([])

export function useCart() {
  console.log('useCart called, items:', items.value)

  const addToCart = (product: Pick<Product, 'id' | 'title' | 'price' | 'thumbnail'>) => {
    console.log('Adding to cart:', product)
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
      console.log('Incremented quantity:', existingItem)
    } else {
      const newItem = { ...product, quantity: 1 }
      items.value.push(newItem)
      console.log('Added new item:', newItem)
    }
    console.log('Current cart items:', items.value)
  }

  const updateQuantity = (id: number, quantity: number) => {
    console.log('Updating quantity for id:', id, 'to:', quantity)
    const item = items.value.find(item => item.id === id)
    if (item && quantity >= 1) {
      item.quantity = quantity
      console.log('Updated item:', item)
    }
    console.log('Current cart items:', items.value)
  }

  const removeFromCart = (id: number) => {
    console.log('Removing item with id:', id)
    items.value = items.value.filter(item => item.id !== id)
    console.log('Current cart items:', items.value)
  }

  const totalPrice = computed(() => {
    const total = items.value.reduce((total, item) => total + item.price * item.quantity, 0)
    console.log('Computed total price:', total)
    return total
  })

  return { items, addToCart, updateQuantity, removeFromCart, totalPrice }
}