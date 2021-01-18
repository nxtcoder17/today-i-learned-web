import axios from 'axios';

export const fetchPosts = async () => axios.get('http://localhost:3000/til');
