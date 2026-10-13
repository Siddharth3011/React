//creating custom hook:
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/Siddharth3011/currency-data@main/${currency}_01.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]); 
      })
      .catch((err) => console.error("Currency fetch error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo; //we have to call the useCurrencyInfo again and again so we have return the useCurrencyInfo.
