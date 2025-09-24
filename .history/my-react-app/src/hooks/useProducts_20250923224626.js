// hooks/useProducts.js - Reusable data fetching logic
import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productService.getProducts(filters);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [JSON.stringify(filters)]); // Re-fetch when filters change
  
  const refetch = () => {
    fetchProducts();
  };
  
  return {
    products,
    loading,
    error,
    refetch
  };
};

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!productId) return;
    
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productService.getProduct(productId);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);
  
  return {
    product,
    loading,
    error
  };
};