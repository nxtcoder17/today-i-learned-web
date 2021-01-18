import axios from 'axios';

const BASE_URL = process.env.SERVER_URL;

export const fetchPosts = async () => axios.get(`${BASE_URL}/til`);
