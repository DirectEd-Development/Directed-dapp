import axios from "axios";
const BLOCKFROST_PROJECT_ID = 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx';
const apiUrl = `https://cardano-mainnet.blockfrost.io/api/v0`;

export async function getWalletBalance(address: string) {
    try {
      const response = await axios.get(`${apiUrl}/accounts/${address}`, {
        headers: { 'project_id': BLOCKFROST_PROJECT_ID }
      });
      const data = response.data;
      console.log(data)

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }