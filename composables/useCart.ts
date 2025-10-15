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
  const addToCart = (product: Pick<Product, 'id' | 'title' | 'price' | 'thumbnail'>) => {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      const newItem = { ...product, quantity: 1 }
      items.value.push(newItem)
    }
  }

  const updateQuantity = (id: number, quantity: number) => {
    const item = items.value.find(item => item.id === id)
    if (item && quantity >= 1) {
      item.quantity = quantity
    }
  }

  const removeFromCart = (id: number) => {
    items.value = items.value.filter(item => item.id !== id)
  }

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  return { items, addToCart, updateQuantity, removeFromCart, totalPrice }
}