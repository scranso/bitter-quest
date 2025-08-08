# Bitter Quest

Bitter Quest is a web application that helps amari and cocktail enthusiasts find scarcely available amari and liqueurs in the closest available stores. It allows users to browse products, check their availability in different stores, filter searches by distance, and view detailed information about both products and stores. 

## Features 

- Browse a specialized list of amari and liqueur products displayed in the app
- View detailed information about each product, including description and price
- Check product availability across multiple stores
- Filter stores by distance
- View detailed information about each store, including address, distance from a centralized location, and contact information
- Responsive design for various screen sizes
- Custom API
- Live deployment (https://bitter-quest-wy4l.vercel.app/stores/5/product/4)


## Technology Stack

- Next.js
- React
- TypeScript
- CSS Modules

## Launching The Thing

### What You Need

- Node.js (version 14 or later)
- npm (comes with Node.js)

### To Install

1. Clone the repository
   
```git clone https://github.com/scranso/bitter-quest.git```

2. Navigate to the project directory:
   
```cd bitter-quest```

3. Install dependencies:
   
```npm install```

4. Start the development server:
   
```npm run dev```

5. Open your browser and visit `http://localhost:3000`


## Project Structure

- `/src/app`: Contains the main applicaiton code
- `/api`: Contains the local API and routes for fetching data
- `/stores`: Store-related pages
- `/products`: Product-related pages
- `/public`: Static assets like images

## API Routes - (because the naming conventions got a little out of hand)

- `/api/stores `: Fetches all stores
- `/api/stores/[storeId`: Fetches detailes for a specific store
- `/api/products`: Fetches all products
- `/api/products/[productId] `: Fetches details for a specific product
