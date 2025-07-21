"use client"
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
  store_data: StoreData;
  price?: number; // Uncomment this line if you want to include price in the Product interface
  // ships_locally?: boolean; // Uncomment this line if you want to include ships_locally in the Product interface
}

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
  // ships_locally?: boolean; // Uncomment this line if you want to include ships_locally in the Store interface
}




const HomePage: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]); // State for stores data
  const [products, setProducts] = useState<Product[]>([]); // State for products data

  // Fetching data from API endpoints
  const fetchStores = async () => {
    const response = await fetch('/api/stores/route'); // API endpoint for stores?
    const data = await response.json();
    setStores(data);
  };

  // Fetching data from API endpoints
  const fetchProducts = async () => {
    const response = await fetch('/api/products/route'); // API endpoint for products?
    const data = await response.json();
    setProducts(data);
  };

  // Fetching data when the component mounts
  useEffect(() => {
    fetchStores();
    fetchProducts();
  }, []);

  // const headerStyle = {
  //   backgroundColor: 'lightblue',
  //   padding: '2rem',
  //   textAlign: 'center',
  //   borderBottom: '2px solid #ddd',
  // };

  // const paragraphStyle = {
  //   padding: '1rem',
  //   textAlign: 'center',
  // };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h2>What are you looking for?</h2>
          <p>Find the best amari and liqueurs near your location with ease!</p>
        </div>

         {/* Results Section: Stores  */}
        <div>
          <h3>Nearby Stores</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {stores.map((store, index) => (
              <div key={index} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h4>{store.name}</h4>
                <p>{store.address}</p>
                {/* <p>{store.description}</p> */}
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section: Products */}
        <div style={{ marginTop: '40px' }}>
          <h3>Available Products</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {products.map((product, index) => (
              <div key={index} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p><strong>Price: ${product.price}</strong></p>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
