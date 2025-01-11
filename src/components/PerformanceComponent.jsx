import { IoMdArrowDropup } from "react-icons/io";
const PerformanceComponent = ({ performanceData, tabs, sectionRefs }) => {
    const calculatePosition = (low, high, current) => {
      return ((current - low) / (high - low)) * 100; 
    };
  
    const currentPrice = performanceData.current; 
    const position = calculatePosition(performanceData.yearLow, performanceData.yearHigh, currentPrice);
  
    return (
      <div key={tabs.Overview} ref={sectionRefs.Overview} className="p-6 bg-white rounded-lg shadow-md w-full my-5">
        <h2 className="text-2xl font-semibold mb-6">Performance</h2>

        {/* Today's Performance */}
        <div className="flex items-center gap-5 justify-between mt-6">
          <div className="text-left">
            <p className="text-gray-500 text-sm">Today's Low</p>
            <p className="text-gray-800 text-lg ">{performanceData.todayLow.toLocaleString()}</p>
          </div>
          <div className="relative h-2 w-[70%] bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              style={{ width: "100%" }}
            ></div>
        <div
          className="absolute top-0 h-5 w-5 rounded-full"
          style={{
            left: `calc(${position}% - 12px)`,
            transform: "translateY(-50%)",
          }}
        >
            <div className="translate-y-4 ">
                <IoMdArrowDropup className="text-lg"/>
                {performanceData.current.toLocaleString()}
            </div>
        </div>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Today's High</p>
            <p className="text-gray-800 text-lg ">{performanceData.todayHigh.toLocaleString()}</p>
          </div>
        </div>
            
  
        {/* 52's Performance */}
        <div className="flex items-center gap-5 justify-between mt-6">
          <div className="text-left">
            <p className="text-gray-500 text-sm">Year's Low</p>
            <p className="text-gray-800 text-lg ">{performanceData.yearLow.toLocaleString()}</p>
          </div>
          <div className="relative h-2 w-[70%] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Year's High</p>
            <p className="text-gray-800 text-lg ">{performanceData.yearHigh.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PerformanceComponent;
  