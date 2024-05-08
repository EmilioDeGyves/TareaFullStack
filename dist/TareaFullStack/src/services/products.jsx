import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/products';

const getAllProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data; // Retorna un producto específico
};

const createProduct = async (productData, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const response = await axios.post(baseUrl, { content: productData }, config);
  return response.data; // Retorna el producto creado
};

const updateProduct = async (id, productData, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const response = await axios.put(`${baseUrl}/${id}`, { content: productData }, config);
  return response.data; // Retorna el producto actualizado
};

const deleteProduct = async (id, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  await axios.delete(`${baseUrl}/${id}`, config);
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
