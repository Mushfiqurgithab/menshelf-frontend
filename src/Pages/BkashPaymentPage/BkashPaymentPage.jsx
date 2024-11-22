import React, { useState } from "react";
import bkash from "./bkash-train-ticket--796x445.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BkashPaymentPageTwo = () => {
  const [pin, setPin] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleConfirm = () => {
    console.log("PIN entered:", pin);
    navigate("/user/dash/paymentfour", { state: orderData });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-pink-500">STEP 01</h1>
      <div className="bg-transparent flex items-center justify-center p-4 h-[80vh]">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="bg-pink-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <img src={bkash} alt="bKash Logo" className="w-32" />
            <h2 className="text-lg font-bold">Payment</h2>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div>
                <h3 className="text-gray-700 font-bold">TokenizedMerchant02</h3>
                <p className="text-gray-500 text-sm">Invoice: 63cda6968cae7</p>
              </div>
              <div className="text-right">
                <span className="text-gray-700 font-bold text-xl">
                  {/* ৳ {orderData.allTotalPrice} */}
                </span>
              </div>
            </div>
            <div className="text-center mb-4">
              <p className="text-gray-700">Enter your bKash Account Number</p>
              <input
                type="number"
                value={pin}
                onChange={handlePinChange}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Bkash Number"
              />
            </div>
            <div className="flex w-full justify-between items-center">
              <Link to={"/user/dash/cart"}>
                <button
                  onClick={() => console.log("Close clicked")}
                  className="w-[200px] bg-gray-200 text-gray-700 py-2 rounded-bl-lg hover:bg-gray-300"
                >
                  CLOSE
                </button>
              </Link>
              <button
                onClick={handleConfirm}
                className={`w-[200px] bg-pink-500 text-white py-2 rounded-br-lg hover:bg-pink-600 ${
                  pin.length !== 11 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={pin.length !== 11}
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkashPaymentPageTwo;