"use client" // because useState is needed (componenet requiring client-side state management) and useEffect (also interacting with browser) and generally using local storage
import React, {useState, useEffect} from 'react';
// import Layout from './layout';

interface StoreAvailability {
  availability: boolean;
  price?: number;
}

type StoreData = Record<number, StoreAvailability>;

interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  store_data: StoreData; // This is where I think the issue is in generating the store data in the table.
  price?: number; 
  // ships_locally?: boolean; 
}

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
  // ships_locally?: boolean; 
}




const HomePage: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]); // State for stores data, initialized as an empty array
  const [products, setProducts] = useState<Product[]>([]); // State for products data initialized as an empty array

  // Fetching data from API endpoints
  const fetchStores = async () => {
    const response = await fetch('/api/stores'); // API endpoint for stores?
    const data = await response.json();
    // console.log('Stores fetched:', data);
    setStores(data);
  };

  // Fetching data from API endpoints
  const fetchProducts = async () => {
    const response = await fetch('/api/products'); // API endpoint for products?
    const data = await response.json();
    setProducts(data);
  };

  // Fetching data when the component mounts
  useEffect(() => {
    fetchStores();
    fetchProducts();
  }, []);


  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h2>What are you looking for?</h2>
          <p>Find the best amari and liqueurs near your location with ease!</p>
        </div>

         {/* Price Grid Section */}
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3>Store vs Product Price Grid</h3>
          
          {/* Table for Store vs Product */}
          <div style={{ display: 'grid', gridTemplateColumns: `150px repeat(${products.length}, 1fr)`, gap: '10px', textAlign: 'center' }}>
            
            {/* Header Row with Product Names */}
            <div style={{ fontWeight: 'bold' }}>Stores</div>
            {products.map((product, index) => (
              <div key={index} style={{ fontWeight: 'bold' }}>
                {product.name}
              </div>
            ))}

            {/* Store Data Rows */}
            {stores.map((store) => (
              <React.Fragment key={store.id}>
                {/* Store Name in the first column */}
                <div>{store.name}</div>
                
                {/* Display the price for each store/product intersection */}
                {products.map((product) => {
                  const storeAvailability = product.store_data[store.id];
                  return (
                    <div key={product.id}>
                      {storeAvailability ? (
                        storeAvailability.availability ? (
                          <span>${storeAvailability.price}</span>
                        ) : (
                          <span>Out of Stock</span>
                        )
                      ) : (
                        <span>No Data</span>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
