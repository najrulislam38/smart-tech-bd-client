const Offer = () => {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="w-full flex flex-col lg:flex-row gap-10  justify-between items-center bg-gradient-to-r from-cyan-500 to-[#2550de]"
    >
      <div className="w-full lg:w-1/2">
        <img src="/assets/iphone-15-pro-max.png" className="w-full" />
      </div>
      <div className="w-full lg:w-1/2 py-10 px-10 lg:px-0">
        <div className=" text-white">
          <h3 className="text-4x lg:text-5xl font-fira-sans uppercase mb-2">
            Iphone 15 Pro Max
          </h3>
          <h2 className="text-4xl lg:text-6xl font-fira-sans font-semibold uppercase">
            Up to 20% OFF
          </h2>
          <p className="text-base lg:text-xl text-gray-400 font-medium pt-3 pb-5">
            Get 5% Bonus Coupon with No Min. Purchase Now <br /> Purchase Now
          </p>
          <button className="btn btn-accent">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
