import { useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const SentimentComponent = ({tabs, sectionRefs }) => {


  return (
    <div key={tabs.Sentiments}  ref={sectionRefs.Sentiments} className="p-6 bg-white my-5 rounded shadow-lg font-sans">
      <h2 className="text-xl font-semibold mb-4">Sentiment</h2>

      {/* Key Events Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Key Events</h3>
        <div className="md:flex gap-4 overflow-x-auto">
          {/* Blue Card */}
          <div className="flex items-start bg-blue-100 p-4 rounded-lg md:min-w-[40vw] my-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white font-bold rounded-full mr-3">
            <FaRegUserCircle className="h-8 w-8"/>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Lorem ipsum dolor sit amet consectetur
              </h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et fugiat illum saepe nulla, explicabo temporibus aliquid reiciendis, neque mollitia laudantium vitae atque quasi tenetur eos, cum non odit fugit!
              </p>
            </div>
          </div>

          {/* Green Card */}
          <div className="flex items-start bg-green-100 p-4 rounded-lg md:min-w-[40vw] my-2">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white font-bold rounded-full mr-3">
            <FaRegUserCircle className="h-8 w-8"/>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Lorem ipsum dolor sit amet consectetur
              </h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur incidunt aperiam excepturi optio ut nemo! Optio, officia inventore dolores delectus iure velit, sequi laborum nulla, tempore molestias voluptatum saepe.
              </p>
            </div>
          </div>

          {/* Green Card */}
          <div className="flex items-start bg-green-100 p-4 rounded-lg min-w-[40vw] my-2">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white font-bold rounded-full mr-3">
            <FaRegUserCircle className="h-8 w-8"/>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Lorem ipsum dolor sit amet consectetur
              </h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div className="">
        <h3 className="text-lg font-medium mb-4">Analyst Estimates</h3>
        <div className="flex items-center gap-6">
          {/* Circle Chart */}
          <div className="relative flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 font-semibold rounded-full">
            76%
          </div>

          {/* Bars */}
          <div className="flex-1">
            {/* Buy Bar */}
            <div className="flex items-center mb-4">
              <span className="w-16 text-sm font-medium">Buy</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div className="bg-green-500 h-2" style={{ width: '76%' }}></div>
              </div>
            </div>

            {/* Hold Bar */}
            <div className="flex items-center mb-4">
              <span className="w-16 text-sm font-medium">Hold</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div className="bg-yellow-400 h-2" style={{ width: '8%' }}></div>
              </div>
            </div>

            {/* Sell Bar */}
            <div className="flex items-center">
              <span className="w-16 text-sm font-medium">Sell</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div className="bg-red-500 h-2" style={{ width: '16%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentComponent;
