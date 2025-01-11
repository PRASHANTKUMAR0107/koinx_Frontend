import useTrendingData from "../hooks/useTrendingData";

const TrendingCoins = () => {
  const { data, loading, error } = useTrendingData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-white p-6 my-5 rounded shadow-lg">
      <h2 className="text-2xl font-semibold">Trending Coins (24h)</h2>
      <ul className="flex flex-col gap-5 my-5">
        {data && data.map((coin, index) => (
          <li className="flex items-center justify-between" key={coin.item.coin_id} >
            <div className="flex gap-2">
            <img className="rounded-full h-10 w-10" src={coin.item.thumb} alt={coin.item.name}/>
            <span className="flex items-center"> {coin.item.name} ({coin.item.symbol})</span>
            </div>
            {/* <p>Price: ${coin.item.data.price.toFixed(2)}</p> */}
            {/* <p>Market Cap: {coin.item.data.market_cap}</p> */}
            <p className={`px-1 rounded-md ${
              coin.item.data.price_change_percentage_24h.usd > 0
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
            }`}>
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
