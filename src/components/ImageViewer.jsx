"use client";
import Image from "next/image";
import { useState } from "react";

const ImageViewer = () => {
  const [imageSrc, setImageSrc] = useState("/images/kemper-front.jpg");

  const imageItems = [
    {
      id: 1,
      src: "/images/kemper-front.jpg",
    },
    {
      id: 2,
      src: "/images/kemper-angle.jpg",
    },
    {
      id: 3,
      src: "/images/kemper-rear.jpg",
    },
  ];

  return (
    <div className="w-1/2">
      <div className="border border-gray-200 rounded-md shadow-sm p-1 flex justify-center items-center">
        <Image
          src={imageSrc}
          alt="Product Front"
          className="w-[462px] h-[310px]"
          height={462}
          width={310}
        />
      </div>

      <div className="flex flex-row gap-4 mt-4">
        {imageItems.map((item) => (
          <button
            className={`border shadow-sm rounded-md p-0.5 ${
              imageSrc === item.src && "border-2 border-black"
            }`}
            key={item.id}
            onClick={() => setImageSrc(item.src)}
          >
            <Image
              src={item.src}
              alt=""
              className="h-[74px] w-[111px]"
              height={74}
              width={111}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
