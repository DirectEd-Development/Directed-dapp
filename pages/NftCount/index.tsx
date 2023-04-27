import axios from 'axios'
import { useEffect, useState } from 'react';

const NftCount = () => {
  const [free, setFree] = useState();
  const [loading, setLoading] = useState(false);
  // Get number of free nfts on nmkr
  useEffect(() => {
    const loadFree = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/getUserRequest");
        setFree(response.data);
        setLoading(false);
      } catch { }
    }
    loadFree();
  }, [])

  return (
    <div>
      <h1>NFTs Left</h1>
      <p>Maryhill x Ngong NFTs Remaining: {free}</p>
    </div>
  );
};

export default NftCount;
