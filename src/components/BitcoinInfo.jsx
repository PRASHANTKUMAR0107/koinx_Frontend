import React from "react";
import useCoinData from "../hooks/useCoinData";
// import DOMPurify from "dompurify";

const BitcoinInfo = ({tabs, sectionRefs}) => {
  const { data,detailedData, loading, error } = useCoinData("bitcoin");
  // const sanitizedHTML = DOMPurify.sanitize(detailedData);
  console.log(detailedData)
  return (
    <div key={tabs.NewInsights} ref={sectionRefs.NewInsights}  className="p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-6">
      {/* About Bitcoin Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">About Bitcoin</h2>
        <div
          dangerouslySetInnerHTML={{ __html: detailedData }}
        ></div>
      </div>

      {/* Lorem Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus ut{" "}
          <span className="text-green-600 font-medium">Anil Gehlot</span> quam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p className="mt-3 text-gray-700">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
          magna eget eros donec cursus nunc.
        </p>
      </div>

{/* Already Holding Bitcoin Section */}
<div>
  <h3 className="text-lg text-white font-semibold mb-4">Already Holding Bitcoin?</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Calculate Profits */}
    <div className="p-5 text-white  bg-gradient-to-r from-green-400 to-cyan-600 rounded-lg flex items-center space-x-4 transition duration-1000 hover:from-green-400 hover:to-blue-600">
      <div className="flex items-center justify-center h-full w-[30%] text-white font-bold">
        <img className="h-full object-cover rounded" src="data:image/jpeg;base64,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" alt="" />
      </div>
      <div>
        <h4 className="font-medium">Calculate your Profits</h4>
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Check Now
        </button>
      </div>
    </div>

    {/* Calculate Tax Liability */}
    <div className="p-5 text-white bg-gradient-to-r from-orange-400 to-rose-600 rounded-lg flex items-center space-x-4 transition duration-300 hover:from-orange-400 hover:to-red-800">
      <div className="flex items-center justify-center h-full w-[30%] text-white font-bold rounded-full">
        <img className="h-full object-cover rounded" src="https://wesoftyou.com/wp-content/uploads/2023/07/kanchanara-y3FRkhP-UgY-unsplash-scaled.jpg" alt="" />
      </div>
      <div>
        <h4 className="font-medium">
          Calculate your tax liability
        </h4>
        <button className="mt-2 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Check Now
        </button>
      </div>
    </div>
  </div>
</div>



      {/* Additional Paragraph */}
      <div>
        <p className="text-gray-700">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
          vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
          pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
          fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
          dui.
        </p>
      </div>
    </div>
  );
};

export default BitcoinInfo;
