import { useRef, useState } from "react"
import Banner from "../components/Banner"
import CoinHero from "../components/CoinHero"
import DetailsHeader from "../components/DetailsHeader"
import PerformanceDashboard from "../components/PerformanceDashboard"
import SentimentComponent from "../components/SentimentComponent"
import TrendingCoins from "../components/TrendingCoins"
import BitcoinInfo from "../components/BitcoinInfo"
import Tokenomics from "../components/Tokenomics"
import Team from "../components/Team"

const Home = () => {

    const [activeTab, setActiveTab] = useState("Overview");

  // Tabs and refs for sections
  const tabs = [
    "Overview",
    "Fundamentals",
    "NewInsights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const sectionRefs = tabs.reduce((acc, tab) => {
    acc[tab] = useRef(null);
    return acc;
  }, {});

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab

    // Scroll to the selected section
    sectionRefs[tab].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <div className="md:flex justify-between md:p-10 p-5 gap-5">
        <div className="w-full md:w-2/3">
            <CoinHero/>
            <DetailsHeader
                tabs={tabs}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
            />
            <PerformanceDashboard tabs={tabs} sectionRefs={sectionRefs}/>
            <SentimentComponent tabs={tabs} sectionRefs={sectionRefs}/>
            <BitcoinInfo tabs={tabs} sectionRefs={sectionRefs}/>
            <Tokenomics tabs={tabs} sectionRefs={sectionRefs}/>
            <Team tabs={tabs} sectionRefs={sectionRefs}/>
        </div>
        <div className="h-[] md:w-1/3">
            <Banner/>
            <TrendingCoins/>
        </div>
    </div>
  )
}

export default Home