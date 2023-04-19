import axios from 'axios'

const BASE_URL = "https://studio-api.preprod.nmkr.io";
// const BASE_URL = "https://api.quotable.io";

const TOKEN = "7a64bf92ab8245e88d57a22819c00ac8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const nftUpdate = axios.create({
    baseURL: BASE_URL,
    headers: {  Authorization: `Bearer ${TOKEN}`}
    // headers: {  }
})