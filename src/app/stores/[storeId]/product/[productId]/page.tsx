"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Store {
    id: string;
    name: string;
    address: string;
    distance: string;
    phone: string;
    website: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    type: string;
    store_data: {
        [storeId: string]: {
            available: boolean;
            price: number;
        }
    };
    price: number;
    // shipsLocally: boolean;
    // availability: StoreAvailability;
}

const productImages: { [key: string]: string } = { // Define product images
    '1': '/img/product1.jpg',
    '2': '/img/product2.png',
    '3': '/img/product3.png',
    '4': '/img/product4.png',
    '5': '/img/product5.jpg',
};
    

const IndividualStorePage: React.FC = () => { // Define component
  const { storeId, productId } = useParams(); // Access dynamic parameters from URL
  const [store, setStore] = useState<Store | null>(null); // Type store state 
  const [product, setProduct] = useState<Product | null>(null); // Type product state
  const [loading, setLoading] = useState(true); // Loading state


  useEffect(() => {

// Only fetch data when storeId and productId are provided
if (!storeId ||!productId) return;

const fetchData = async () => {
    try {
        setLoading(true); // Set loading state to true

        // fetch store data and product data in parallel
        const [storeResponse, productResponse] = await Promise.all([ 
            fetch(`/api/stores/${storeId}`),
            fetch(`/api/products/${productId}`)
        ]);

        if (!storeResponse.ok) {
            throw new Error(`Error fetching store data: ${storeResponse.statusText}`);
        }
        if (!productResponse.ok) {
            throw new Error(`Error fetching product data: ${productResponse.statusText}`);
    
            }

        const storeData: Store = await storeResponse.json();
        const productData: Product = await productResponse.json();

        const priceForStore = productData.store_data[storeId]?.price;

        

        setStore(storeData);
        setProduct({
            ...productData,
            price: priceForStore,
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false);
    }
    };
    fetchData(); // Fetch data when component mounts or when storeId or productId changes
    }, [storeId, productId]);


        if (loading) {
            return <div>Loading...</div>;
        }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
    }}>
      <h1>Store Details</h1>
      {store ? (
        <>
          <p><strong>Store:</strong> {store.name}</p>
          <p><strong>Address:</strong> {store.address}</p>
          <p><strong>Distance From Downtown Louisville:</strong> {store.distance}</p>
          <p><strong>Phone:</strong> {store.phone}</p>
          <p><strong>Website:</strong> <a href={store.website} target="_blank" rel="noopener noreferrer">{store.website}</a></p>
        </>
      ) : ( 
        <p>Store data not found.</p>
      )}

      <h2>Product Details</h2>
      {product ? (
        <>
          {productImages[product.id] && ( // Display product image if available
            <Image src={productImages[product.id]} alt={product.name} width={300} height={600} /> 
          )}
          <p><strong>Product Name:</strong> {product.name}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> {product.price !== undefined ? `$${product.price.toFixed(2)}` : 'Price Not Available'} </p> 
        </>
      ) : (
        <p>Product data not found.</p>
      )}
    </div>
  );
};

export default IndividualStorePage;
