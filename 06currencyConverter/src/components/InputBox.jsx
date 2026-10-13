import React, {useId} from 'react'
// do not use useId to generate keys in list like using this in for loop.
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], //default option if any error came it will handle
    selectCurrency = "usd", // default value
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>    {/* here i had written the css in backticks as it can be handle by user or if user want to add css they can */}
            <div className="w-1/2"> {/*but here we didn't write the css class in backticks*/}
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //yahan hmne check kra hai ki onAmountChange function exist krta hai ya nahi agar exist krta hai to hi call hoga otherwise nahi hoga.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {/* key ka use loops mein performance improve krne ke liye use kiya jata hai age uiske bare mein aur discussion hoga */}
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;