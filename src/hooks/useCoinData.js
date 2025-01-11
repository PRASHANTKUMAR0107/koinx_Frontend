import { useState, useEffect } from "react";
import axios from "axios";

const useCoinData = (coinId) => {
  const [data, setData] = useState(null); // For market data
  const [detailedData, setDetailedData] = useState(null); // For detailed data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const marketDataResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=CG-CcnzFYnUqkV61zawcXRzs3hn&vs_currency=usd&ids=${coinId}`
        );

        const detailedDataResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}?x_cg_demo_api_key=CG-CcnzFYnUqkV61zawcXRzs3hn`
        );

        setData(marketDataResponse.data[0]); 
        setDetailedData(detailedDataResponse.data.description.en);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [coinId]);

  return { data, detailedData, loading, error };
};

export default useCoinData;
