import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
//https://jonathandemond.github.io/apipelis/


// Operaciones CRUD
export const fetchData = async () => axios.get(API_URL);
export const createData = async (data) => axios.post(API_URL, data);
export const updateData = async (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteData = async (id) => axios.delete(`${API_URL}/${id}`);
