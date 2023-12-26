const Footer = ({ totalPrice }) => {
  return (
    <div className="bg-gray-50 flex justify-evenly p-4 sticky bottom-0">
      <div>
        <p className="text-xs text-gray-900">Free Shipping</p>
        <p className="text-xs text-gray-500">
          Get 2-day free shipping anywhere in North America.
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-900">2 Year Warranty</p>
        <p className="text-xs text-gray-500">
          If anything goes wrong in the first two years, we will replace it for
          free.
        </p>
      </div>

      <div className="flex gap-4">
        <div>
          <h2 className="font-bold text-2xl">$ {totalPrice}</h2>
          <p className="text-xs text-gray-500">
            Need financing?
            <a href="#" className="underline">
              Learn more
            </a>
          </p>
        </div>

        <button className="px-[16px] py-[9px] bg-gray-900 text-white text-sm rounded-md hover:bg-opacity-80 transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Footer;
