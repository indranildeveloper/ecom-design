"use client";

import { useState } from "react";
import Heading from "@/components/Heading";
import ImageViewer from "@/components/ImageViewer";
import ProductDescription from "@/components/ProductDescription";
import Footer from "@/components/Footer";

const HomePage = () => {
  const price = 1799;
  const [isPowerAmpSelected, setIsPowerAmpSelected] = useState(1);
  const [isFootControllerSelected, setIsFootControllerSelected] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  return (
    <>
      <div className="p-4">
        <Heading />

        <div className="flex gap-8 mt-8">
          <ImageViewer />
          <ProductDescription
            price={price}
            isPowerAmpSelected={isPowerAmpSelected}
            setIsPowerAmpSelected={setIsPowerAmpSelected}
            isFootControllerSelected={isFootControllerSelected}
            setIsFootControllerSelected={setIsFootControllerSelected}
            setTotalPrice={setTotalPrice}
          />
        </div>
      </div>
      <Footer totalPrice={totalPrice} />
    </>
  );
};

export default HomePage;
