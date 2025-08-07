"use client" // because useState is needed (componenet requiring client-side state management) and useEffect (also interacting with browser) and generally using local storage
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';


// import Layout from './layout';

const HomePage: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]); // State for stores data, initialized as an empty array
  const [products, setProducts] = useState<Product[]>([]); // State for products data initialized as an empty array
  const router = useRouter(); // Using the router to navigate to other pages


  interface StoreAvailability {
  availability: boolean;
  price?: number;
  onClick: () => void;
}

const handleClick = (storeId: number, productId: number) => {
  // router.push(`/stores/${storeId}/product/${productId}`);
  router.push(`/stores/${storeId}/product/${productId}`);
  
};


type StoreData = Record<number, StoreAvailability>;

interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  store_data: StoreData; 
  price: number; 
  // ships_locally?: boolean; 
}

interface Store {
  id: number;
  name: string;
  address: string;
  distance: string;
  phone: string;
  website: string;
  // ships_locally?: boolean; 
}


  // Fetching data from API stores endpoints
  const fetchStores = async () => {
    const response = await fetch('/api/stores'); // API endpoint for stores?
    const data = await response.json();
    // console.log('Stores fetched:', data);
    setStores(data);
  };

  // Fetching data from API products endpoints
  const fetchProducts = async () => {
    const response = await fetch('/api/products'); // API endpoint for products?
    const data = await response.json();
    setProducts(data);
  };


  // Fetching data when the component mounts 
  useEffect(() => {
    fetchStores();
    fetchProducts();
    // setIsMounted(true);
  }, []);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h2>What are you looking for?</h2>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3>Popular Searches</h3>
          
          {/* creating a table for store vs product */}
          <div style={{ display: 'grid', gridTemplateColumns: `150px repeat(${products.length}, 1fr)`, gap: '10px', textAlign: 'center', border: '2px solid #ddd' }}>
            
            {/* header row with product names - needs adjusting of "store" label placement */}
            <div style={{borderRight: '2px solid #ddd', padding: '10px' }}>Stores</div>
            {products.map((product, index) => (
              <div key={index} style={{ fontWeight: 'bold', borderBottom: '2px solid #ddd', padding: '10px' }}>
                {product.name}
              </div>
            ))}

            {/* store data rows */}
            {stores.map((store) => (
              <React.Fragment key={store.id}>
                {/* store name - first column */}
                <div style={{ padding: '10px', borderBottom: '2px solid #ddd', borderRight: '2px solid #ddd'}}>{store.name}</div>
                
                {/* product availability buttons for each store by calling handleClick function with storeId and productId */}
                {products.map((product) => {
                  const storeAvailability = product.store_data[store.id];
                  return (
                    // creates a button for each product availability for the current store by calling handleClick function with storeId and productId  - needs adjusting of "handleClick" function call */}
                    <button key={product.id} onClick={() => handleClick(store.id, product.id)}  style={{ padding: '10px', borderBottom: '2px solid #ddd', borderRight: '2px solid #ddd'}}>
                      {storeAvailability ? (
                        storeAvailability.availability ? (
                          <span className="available-price">${storeAvailability.price}</span>
                        ) : (
                          <span>Out of Stock</span>
                        )
                      ) : (
                        <span>No Data</span>
                      )}
                    </button>
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



