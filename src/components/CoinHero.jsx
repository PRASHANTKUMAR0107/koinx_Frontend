import useFetchCoinData from "../hooks/useFetchCoinData";
import TradingViewWidget from "./TradingViewWidget";

const CoinHero = () => {
  const { data, loading, error } = useFetchCoinData();
  return (
    <div className="md:p-4 md:bg-white rounded">
        <div className="flex gap-2 items-center">
            <img className="h-10 w-10" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040" alt="" />
            <h1 className="text-2xl font-bold">Bitcoin</h1>
            <p className="text-gray-600">BTC</p>
            <div className="bg-gray-200 p-1 rounded mx-5">
                Rank #1
            </div>
        </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="bg-white pb-10 rounded p-4 my-5">
      {data && (
        <div className="mb-4">
            <div className="flex gap-5 items-center">
                <p className="text-2xl font-bold">
                  ${data.bitcoin.usd.toLocaleString("en-US")}
                </p>
                <p className={`p-1 rounded-md ${
                    data.bitcoin.usd_24h_change > 0
                    ? 'bg-green-50 text-green-600'
                    : 'bg-red-50 text-red-600'
                }`}>
                    {data.bitcoin.usd_24h_change.toFixed(2)}%
                </p>
                <p className="text-gray-500">(24H)</p>
            </div>
          <p className="text-gray-700">
            ₹{data.bitcoin.inr.toLocaleString("en-IN")}
            </p>
        </div>
      )}
      <hr />
      <div className="md:h-[50vh] h-[30vh] mt-5">
        Bitcoin Price Chart (USD).
        <TradingViewWidget />
      </div>
      </div>
    </div>
  );
};

export default CoinHero;
