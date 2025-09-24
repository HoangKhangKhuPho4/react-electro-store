// services/productService.js - Specific service for products
import api from './api';

export const productService = {
  // GET /api/products
  getProducts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/products${queryString ? `?${queryString}` : ''}`;
    return await api.get(endpoint);
  },
  
  // GET /api/products/:id
  getProduct: async (id) => {
    return await api.get(`/products/${id}`);
  },
  
  // GET /api/products/category/:category
  getProductsByCategory: async (category) => {
    return await api.get(`/products/category/${category}`);
  },
  
  // GET /api/products/search
  searchProducts: async (query) => {
    return await api.get(`/products/search?q=${encodeURIComponent(query)}`);
  },
  
  // POST /api/products (admin only)
  createProduct: async (productData) => {
    return await api.post('/products', productData);
  },
  
  // PUT /api/products/:id (admin only)
  updateProduct: async (id, productData) => {
    return await api.put(`/products/${id}`, productData);
  },
  
  // DELETE /api/products/:id (admin only)
  deleteProduct: async (id) => {
    return await api.delete(`/products/${id}`);
  }
};