import React, { useState } from 'react'

const PaymentProve = () => {

    const [cardInfo, setCardInfo] = useState({
    cardHolder: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  return (
 <form>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    placeholder="0000 0000 0000 0000"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    placeholder="MM / YY"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>{" "}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="card-holder"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Card Holder
                  </label>
                  <input
                    value={cardInfo.cardHolder}
                    onChange={handleChange}
                    type="text"
                    name="card-holder"
                    id="card-holder"
                    placeholder="Full Name"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    placeholder="000"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
  )
}

export default PaymentProve