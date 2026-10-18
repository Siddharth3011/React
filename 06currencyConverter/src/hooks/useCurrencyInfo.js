//creating custom hook:
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => { //yahan use effect ka use isliye kiya hai kyuki hume currency ke change hone par hi data fetch karna hai. aur useEffect me humne dependency array me currency pass kiya hai taki jab bhi currency change ho to useEffect run ho.
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
