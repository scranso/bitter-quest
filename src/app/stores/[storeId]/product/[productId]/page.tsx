"use client"
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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
            availability: boolean;
            price: number;
        }
    };
}

const productImages: { [key: string]: string } = { // Defining product images
    '1': '/img/product1.jpg',
    '2': '/img/product2.png',
    '3': '/img/product3.png',
    '4': '/img/product4.png',
    '5': '/img/product5.jpg',
};




const distanceOptions = [
    {value: 'all', label: 'All Distances'},
    {value: '5', label: 'Within 5 Miles'},
    {value: '10', label: 'Within 10 Miles'},
    {value: '20', label: 'Within 20 Miles'},
    {value: '50', label: 'Within 50 Miles'},
];
    

const IndividualStorePage: React.FC = () => { // Define component
  const { storeId, productId } = useParams(); // Access dynamic parameters from URL
  const router = useRouter(); // Using the router to navigate to other pages
  const [store, setStore] = useState<Store | null>(null); // Type store state 
  const [product, setProduct] = useState<Product | null>(null); // Type product state
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedDistance, setSelectedDistance] = useState('all'); // Distance selection state
  const [allStores, setAllStores] = useState<Store[]>([]); // All stores state


  useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true); // Set loading state to true
            const [storeResponse, productResponse, allStoresResponse] = await Promise.all([ // Fetch store and product data
                fetch(`/api/stores/${storeId}`),
                fetch(`/api/products/${productId}`),
                fetch(`/api/stores`), // Fetch all stores data
            ]);

            if (!storeResponse.ok || !productResponse.ok || !allStoresResponse.ok) {
                throw new Error(`Error fetching data`);
            }

            const storeData: Store = await storeResponse.json();
            const productData: Product = await productResponse.json();
            const allStoresData: Store[] = await allStoresResponse.json();


            setStore(storeData);
            setProduct(productData);
            setAllStores(allStoresData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
        };
    fetchData(); // Fetch data when component mounts or when storeId or productId changes
    }, [storeId, productId]);

    useEffect(() => {
        
        if (product && storeId) {
            console.log('Store data for current product:', product.store_data[storeId as string].availability);
        }
      }, [storeId, productId, store, product]);

    const handleDistanceChange = (event: React.FormEvent<HTMLSelectElement>) => { // Update selected distance state when the distance dropdown is changed 
        setSelectedDistance((event.target as HTMLSelectElement).value);
    };

    const filteredStores = allStores.filter(store => { // Filter stores based on selected distance
        if (selectedDistance === 'all') return true;
        const storeDistance = parseFloat(store.distance.replace(' miles', '')); // Convert store distance to number
        return storeDistance <= parseFloat(selectedDistance);
    });

    const handleStoreChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // Navigate to new store page when a different store is selected 
        const newStoreId = event.target.value;
        router.push(`/stores/${newStoreId}/product/${productId}`); // Navigate to new store page by passing new storeId and productId as query parameters
  };

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
        <Link href="/" style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      padding: '10px 20px',
      backgroundColor: 'black',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
    }}>
      Home
    </Link>
      {/* <h1>Store Details</h1>
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
          {valueScore && (
            <p><strong>Value Score:</strong> {valueScore.toFixed(2)} (higher is better)</p>
            )}
        </>
      ) : (
        <p>Product data not found.</p>
      )}
    </div>
  );
};

export default IndividualStorePage; */}
<h1>Product and Store Details</h1>
      
      <div>
        <label htmlFor="distanceFilter">Filter stores by distance: </label>
        <select id="distanceFilter" value={selectedDistance} onChange={handleDistanceChange}>
          {distanceOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="storeSelect">Select a store: </label>
        <select id="storeSelect" value={storeId as string} onChange={handleStoreChange}>
          {filteredStores.map(store => (
            <option key={store.id} value={store.id}>
              {store.name} ({store.distance})
            </option>
          ))}
        </select>
      </div>

      {store && (
        <div>
          <h2>Store Details</h2>
          <p><strong>Store:</strong> {store.name}</p>
          <p><strong>Address:</strong> {store.address}</p>
          <p><strong>Distance From Downtown Louisville:</strong> {store.distance}</p>
          <p><strong>Phone:</strong> {store.phone}</p>
          <p><strong>Website:</strong> <a href={store.website} target="_blank" rel="noopener noreferrer">{store.website}</a></p>
        </div>
      )}

      {product && (
        <div>
          <h2>Product Details</h2>
          {productImages[product.id] && (
            <Image src={productImages[product.id]} alt={product.name} width={300} height={600} />
          )}
          <p><strong>Product Name:</strong> {product.name}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> {
        
          product.store_data && storeId && product.store_data[storeId as string]
          ? product.store_data[storeId as string].availability

            ? `$${product.store_data[storeId as string].price.toFixed(2)}`
            : 'Not available at this store'
          : 'Price data not found'
        }</p>
        </div>
      )}
    </div>
  );
};

export default IndividualStorePage;