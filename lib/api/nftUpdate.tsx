import axios from 'axios';

const BASE_URL = "https://studio-api.nmkr.io";
// const BASE_URL = "https://api.quotable.io";
// 5a8b2ec313ec4a07a979540d05e32f65
const TOKEN = "a499c5007f104a73836d73be34648a1a";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const nftUpdate = axios.create({
    baseURL: BASE_URL,
    headers: {  Authorization: `Bearer ${TOKEN}`}
    // headers: {  }
})