const Banner = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="max-w-screen-2xl mx-auto py-10 lg:py-20 px-5 md:px-10 lg:px-20"
    >
      <div className="banner-container flex flex-col lg:flex-row gap-10 justify-between items-center ">
        <div className="w-full lg:w-1/2">
          <p className="text-red-500 font-medium">
            TECHNOLOGY WITH ARTIFICIAL INTELLIGENCE
          </p>
          <h1 className="text-4xl md:text-5xl  font-bold font-fira-sans pt-2 pb-5 ">
            Discover the Latest in{" "}
            <span className="text-[#2550de]">
              Tech
              <br /> and Electronics
            </span>
          </h1>
          <p className=" max-w-xl mb-8 ">
            Exploring the Future of Tech - Delve into a world of groundbreaking
            discoveries and pioneering technologies, uncovering the future of
            the ever-evolving tech industry.
          </p>
          <button className="primary-btn  ">Get Start</button>
        </div>
        <div className="w-full lg:w-1/2 ">
          <img src="/assets/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
