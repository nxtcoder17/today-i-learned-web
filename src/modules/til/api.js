import axios from 'axios';

const blogAxios = axios.create({
  baseURL: process.env.SERVER_URL,
});

export const fetchPosts = async ({ page, size }) => {
  return blogAxios.get('/til', {
    params: {
      page,
      size,
    },
  });
};

export const getById = async (id) => blogAxios.get(`/til/id/${id}`);

export const fetchByTag = async ({ tag, page, size }) =>
  blogAxios.get(`/til/tags/${tag}`, {
    params: {
      page,
      size,
    },
  });
