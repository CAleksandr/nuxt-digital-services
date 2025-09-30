# FunZone Marketplace

FunZone Marketplace is a web application built with Nuxt 4, designed as a marketplace for entertainment industry services and equipment. Users can browse popular products on the homepage, add items to a cart, and explore a full product catalog.

## Project Purpose

- **Homepage** (`pages/index.vue`): Displays a brief description of the marketplace and a section for popular products with placeholder data (to be replaced with API data from DummyJSON).
- **Cart**: Implemented using Pinia for state management (`stores/cart.ts`).
- **Responsive Design**: The interface adapts to mobile, tablet, and desktop devices using local CSS styles.
- **Planned Features**:
  - Integrate DummyJSON API for product data.
  - Create a catalog page (`pages/products/index.vue`) with pagination.
  - Implement cart functionality (add-to-cart button updating the Pinia store).

## Project Structure

```
project-root/
├── app.vue                # Main app component with <NuxtPage />
├── pages/
│   └── index.vue         # Homepage with description and popular products
├── stores/
│   └── cart.ts           # Pinia store for cart management
├── plugins/
│   └── persist.client.ts # Plugin for persisting cart in localStorage
├── eslint.config.mjs     # ESLint configuration
├── nuxt.config.ts        # Nuxt configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## Requirements

- **Node.js**: Version 18.x or higher.
- **Package Manager**: npm, pnpm, yarn, or bun.
- **Browser**: Modern browser (Chrome, Firefox, Edge) for testing.

## Setup

Install dependencies using your preferred package manager:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

- Open `http://localhost:3000` in your browser to view the homepage.
- Use DevTools (F12) to check for errors or debug.

## Production Build

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Technologies Used

- **Nuxt 4**: Framework for server-side and client-side rendering.
- **Vue 3**: Library for building component-based UI.
- **TypeScript**: For type-safe code.
- **Pinia**: For state management (cart).
- **ESLint**: For code quality and linting.
- **@nuxt/image** and **@nuxt/icon**: Modules for image optimization and icons.
- **CSS**: Local styles (`<style scoped>`) for responsive design.

## Next Development Steps

1. Connect the DummyJSON API (`https://dummyjson.com/products?limit=6`) to fetch popular products on the homepage.
2. Create a `components/ProductCard.vue` component for reusable product cards.
3. Implement a catalog page (`pages/products/index.vue`) with pagination.
4. Add cart functionality (link "Add to Cart" button to the Pinia store).

## Troubleshooting

- **ESLint Warning**: If you see `vue/multi-word-component-names`, verify `eslint.config.mjs` or temporarily remove `@nuxt/eslint` from `nuxt.config.ts`.
- **Blank Page**: Ensure `pages/index.vue` exists and contains valid code. Clear the cache:
  ```bash
  rm -rf .nuxt
  npm run dev
  ```
- **Redirect to `/pages`**: Check that `pages/` does not contain a `pages.vue` file or `pages/` subdirectory.

## Useful Links

- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Pinia Documentation](https://pinia.vuejs.org)
- [DummyJSON API Documentation](https://dummyjson.com/docs/products)
- [Nuxt Deployment Guide](https://nuxt.com/docs/getting-started/deployment)