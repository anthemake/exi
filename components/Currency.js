import React, { useEffect, useState } from "react";

const Currency = () => {
  const [currencyData, setCurrencyData] = useState({});
  const updateCurrencyContainer = async () => {
    const oapiUrl = process.env.NEXT_PUBLIC_OAPI_URL;
    const options = { method: "GET", headers: { accept: "application/json" } };

    try {
      const response = await fetch(oapiUrl, options);
      const data = await response.json();
      setCurrencyData(data.rates || {});
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  useEffect(() => {
    updateCurrencyContainer();
    const intervalId = setInterval(updateCurrencyContainer, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="currencyContainer">
      {Object.entries(currencyData).length > 0 ? (
        Object.entries(currencyData).map(([currency, rate], index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-300 py-2 currency-row"
          >
            <div className="bg-bg-cur-symb-grey font-bold text-white rounded p-2 m-4 ml-4">
              {currency}
            </div>
            <div className="text-5xl text-cur-text-tan mr-4 max-sm:text-4xl">
              {rate}
            </div>
          </div>
        ))
      ) : (
        <p>Loading currency data...</p>
      )}
    </div>
  );
};

export default Currency;
