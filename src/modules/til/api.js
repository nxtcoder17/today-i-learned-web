import axios from 'axios';

const blogAxios = axios.create({
  baseURL: process.env.SERVER_URL,
});

export const fetchPosts = async () => blogAxios.get('/til');

export const getById = async (id) => blogAxios.get(`/til/id/${id}`);

export const fetchByTag = async (tag) => blogAxios.get(`/til/tags/${tag}`);
