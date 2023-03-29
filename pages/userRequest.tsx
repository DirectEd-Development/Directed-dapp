import axios from 'axios';

const BASE_URL = "https://studio-api.nmkr.io";
// const BASE_URL = "https://api.quotable.io";

const TOKEN = "ac0deb1a204945c699f356f6bb858b47";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {  Authorization: `Bearer ${TOKEN}`}
    // headers: {  }
});