"use client";

import { useState } from "react";

const ProductDescription = ({
  price,
  isPowerAmpSelected,
  setIsPowerAmpSelected,
  isFootControllerSelected,
  setIsFootControllerSelected,
  setTotalPrice,
}) => {
  const [isPowerAdded, setIsPowerAdded] = useState(false);
  const [isFootAdded, setIsFootAdded] = useState(false);

  const powerAmpItems = [
    {
      id: 1,
      title: "None",
      desc: "Use in the studio or with your own power amp.",
      price: 0,
    },
    {
      id: 2,
      title: "Powered",
      desc: "Built-in 600W solid state power amp.",
      price: 449,
    },
  ];

  const footControllerItems = [
    {
      id: 1,
      title: "None",
      price: 0,
    },
    {
      id: 2,
      title: "Profiler Remote Foot Controller",
      price: 449,
    },
  ];

  return (
    <div className="w-1/2">
      <p className="text-gray-500 text-sm">Starting at</p>
      <h2 className="text-gray-900 text-5xl font-bold">${price}</h2>

      <p className="text-gray-900 text-[18px]">
        The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and
        all-in-one effects processor.
      </p>
      <p className="text-gray-500 text-base">
        Hailed as a game-changer by guitarists the world over, the PROFILER™ is
        the first digital guitar amp to really nail the full and dynamic sound
        of a guitar or bass amp.
      </p>
      <p className="text-gray-500 text-base">
        This is made possible by a radical, patented technology and concept
        which we call {`"${"PROFILING"}"`}.
      </p>

      <div className="mt-6">
        <h4 className="font-semibold text-gray-900">Form Factor</h4>

        <div className="flex flex-row gap-4 mt-2">
          <div className="border rounded-md p-4">
            <h6>Profiler Head</h6>
            <p>
              Compact amplifier head, perfect for a speaker cabinet or desk.
            </p>
          </div>
          <div className="border rounded-md p-4">
            <h6>Profiler Rack</h6>
            <p>3U rackmount version of the classic profiling amplifier.</p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Power Amp</h4>

          <div className="flex flex-col gap-4">
            {powerAmpItems.map((item) => (
              <button
                key={item.id}
                className={`border rounded-md p-4 flex justify-between items-center ${
                  isPowerAmpSelected === item.id && "border-gray-900"
                }`}
                onClick={() => {
                  setIsPowerAmpSelected(item.id);
                  if (!isPowerAdded) {
                    setTotalPrice((prev) => prev + item.price);
                  }
                  setIsPowerAdded(true);
                }}
              >
                <div className="text-start">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <p>{item.price === 0 ? "" : `+ $${item.price}`}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Foot Controller</h4>

          <div className="flex flex-col gap-4">
            {footControllerItems.map((item) => (
              <button
                key={item.id}
                className={`border rounded-md p-4 flex justify-between ${
                  isFootControllerSelected === item.id && "border-gray-900"
                }`}
                onClick={() => {
                  setIsFootControllerSelected(item.id);

                  if (!isFootAdded) {
                    setTotalPrice((prev) => prev + item.price);
                  }
                  setIsFootAdded(true);
                }}
              >
                <div className="text-start">
                  <p className="text-sm">{item.title}</p>
                </div>
                <p className="text-sm">
                  {item.price === 0 ? "" : `+ $${item.price}`}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Specifications</h4>
          <hr className="my-1" />
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
          <div className="my-4 text-xs">
            <p>Amp Models</p>
            <hr className="my-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
