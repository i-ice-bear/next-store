import React from "react";

export default function PincodeCheck() {
  const [pincode, setPincode] = React.useState();

  const pinServiceability = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();

    if (pinJson.includes(parseInt(pincode))) {
      setPincode(true);
    } else {
      setPincode(false);
    }
  };
  const onChangePin = (e) => {
    setPincode(e.target.value);
  };
  return (
    <>
      <div className="flex">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          onChange={onChangePin}
          name="email"
          id="email"
          className="shadow-sm p-3 w-80 focus:ring-indigo-500 focus:border-indigo-500 inline-block sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter your pincode"
        />
        <button
          className=" mx-2 w-40 bg-rose-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          onClick={pinServiceability}
        >
          Enter
        </button>
      </div>
      <h5 className="p-1 mt-3 float-right">
        {pincode && pincode != null && (
          <span className="text-green-500">
            Yes, we can deliever your product at your location
          </span>
        )}
        {!pincode && pincode != null && (
          <span className="text-red-500">
            Sorry, we cannot deliever product at your location.
          </span>
        )}
      </h5>
    </>
  );
}
