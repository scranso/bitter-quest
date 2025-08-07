
// "use client"
// import React from'react';
// import { useParams } from 'next/navigation';

// const IndividualStorePage: React.FC = () => {
//     const params = useParams();
//     const { storeId, productId } = params
    
//     // console.log('Params:', params);


//     return (
//         <div>

//             <h1>Store ID: {storeId}</h1>
//             <h2>Product ID: {productId}</h2>
//         </div>
//     );
// };

// export default IndividualStorePage;





"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface Store {
    id: string;
    name: string;
    address: string;
    website: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    type: string;
    storeId: string;
    price?: number;
    // shipsLocally: boolean;
    // availability: StoreAvailability;
}


const IndividualStorePage: React.FC = () => {
  const { storeId, productId } = useParams(); // Access dynamic parameters from URL
  const [store, setStore] = useState<Store | null>(null); // Type store state
  const [product, setProduct] = useState<Product | null>(null); // Type product state
  const [loading, setLoading] = useState(true); // Loading state


  useEffect(() => {
  // Fetch store data based on storeId
  const fetchStoreData = async () => {
    try {
      const response = await fetch(`/api/stores/store_data/${storeId}`); //using query parameters to fetch data from API
      const storeData: Store = await response.json();
      setStore(storeData);
    } catch (error) {
      console.error('Error fetching store data:', error);
    }
  };

  // Fetch product data based on productId
  const fetchProductData = async () => {
    try {
      const response = await fetch(`/api/products/product_data/${productId}`); //using query parameters to fetch data from API
      const productData: Product = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  
  // Display loading indicator while data is being fetched
  if (storeId && productId) {
    fetchStoreData();
    fetchProductData();
    setLoading(false);
  }
}, [storeId, productId]);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Store Details</h1>
      {store ? (
        <>
          <p><strong>Store Name:</strong> {store.name}</p>
          <p><strong>Address:</strong> {store.address}</p>
        </>
      ) : (
        <p>Store data not found.</p>
      )}

      <h2>Product Details</h2>
      {product ? (
        <>
          <p><strong>Product Name:</strong> {product.name}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </>
      ) : (
        <p>Product data not found.</p>
      )}
    </div>
  );
};

export default IndividualStorePage;
