import React from "react";
import PerformanceComponent from "./PerformanceComponent";
import FundamentalsComponent from "./FundamentalsComponent";
import useCoinData from "../hooks/useCoinData";

const PerformanceDashboard = ({tabs, sectionRefs}) => {
  const { data, loading, error } = useCoinData("bitcoin");

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  // Map API data to the required formats for components
  const performanceData = {
    todayLow: data.low_24h,
    todayHigh: data.high_24h,
    yearLow: data.atl,
    yearHigh: data.ath,
    current: data.current_price,
  };

  const fundamentalsData = {
    "Bitcoin Price": data.current_price.toLocaleString("en-US", { style: "currency", currency: "USD" }),
    "Market Cap": data.market_cap.toLocaleString("en-US", { style: "currency", currency: "USD" }),
    "24h Low / 24h High": `${data.low_24h.toLocaleString()} / ${data.high_24h.toLocaleString()}`,
    "7d Low / 7d High": "N/A", // Not available in API (replace if needed)
    "Trading Volume": data.total_volume.toLocaleString("en-US", { style: "currency", currency: "USD" }),
    "Market Cap Rank": "#"+data.market_cap_rank,
    "Market Cap Dominance": "N/A", // Not available in API (replace if needed)
    "Volume / Market Cap": (data.total_volume / data.market_cap).toFixed(4),
    "All-Time High": `${data.ath.toLocaleString()} (${data.ath_change_percentage.toFixed(2)}%)`,
    "All-Time Low": `${data.atl.toLocaleString()} (${data.atl_change_percentage.toFixed(2)}%)`,
  };

  return (
    <div className="bg-gray-100">
      <PerformanceComponent tabs={tabs} sectionRefs={sectionRefs} performanceData={performanceData} />
      <FundamentalsComponent tabs={tabs} sectionRefs={sectionRefs} fundamentalsData={fundamentalsData} />
    </div>
  );
};

export default PerformanceDashboard;
