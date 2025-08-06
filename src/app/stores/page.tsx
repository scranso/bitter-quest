"use client" // because useState is needed (componenet requiring client-side state management) and useEffect (also interacting with browser) and generally using local storage
import React, {useState, useEffect} from 'react';
import Link from 'next/link';


// import Layout from './layout';

interface StoreAvailability {
  availability: boolean;
  price?: number;
  onClick: () => void;
}

function handleClick() {
  return alert('Redirecting to product details...');
  
}

// const StoreAvailability: React.FC<StoreAvailabilityProps> = ({ availability, price }) => {
//   console.log('Price:', price);
//   return (
//     <button onClick={handleClick} disabled={!price}> 
//       {availability? `$${price}` : 'Not Available'}
//     </button>
//   );
// }

// interface StoreAvailability {
//   availability: boolean;
//   price?: number;
// }

type StoreData = Record<number, StoreAvailability>;

interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  store_data: StoreData; 
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
  }, []);


  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h2>What are you looking for?</h2>
          
        </div>

         {/* <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}> */}
          {/* search bar */}
          {/* <input type="text" placeholder="Search for a store..." />
          <input type="text" placeholder="Search for a product..." />
        </div> */}

        
       
      </div>
    </>
  );
};
  export default HomePage;



