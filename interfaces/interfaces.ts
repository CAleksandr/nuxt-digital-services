export interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
  description: string
}

export interface ResponseCard {
  products: Product[]
  total: number
  skip?: number
  limit?: number
}

export interface CartItem {
  id: number
  title: string
  price: number
  thumbnail: string
  quantity: number
}

export { useCart } from '~/composables/useCart'