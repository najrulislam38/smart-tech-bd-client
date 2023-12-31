import { Link } from "react-router-dom";
import Offer from "./Offer/Offer";
import Partners from "./Partners/Partners";

const Home = () => {
  return (
    <>
      <main className=" max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20">
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="my-10 lg:mb-20"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* apple brand */}
            <Link
              to="/apple"
              className="w-full border shadow-md py-5 text-black bg-base-100 rounded-md hover:bg-base-200 hover:text-[#2550de] duration-300"
            >
              <div className="w-full h-[250px] flex justify-center items-start">
                <img src="/assets/brand/mac-1.jpg" alt="mac-logo" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl text-center font-fira-sans mb-5">
                  Apple
                </h2>
              </div>
            </Link>
            {/* intel brand */}
            <Link
              to="/intel"
              className="w-full border shadow-md py-5 text-black bg-base-100 rounded-md hover:text-[#2550de] hover:bg-base-200 duration-300"
            >
              <div className="w-full h-[250px] flex justify-center items-start">
                <img src="/assets/brand/intel-1.png" alt="" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl text-center font-fira-sans mb-5">
                  Intel
                </h2>
              </div>
            </Link>
            {/* google */}
            <Link
              to="/google"
              className="w-full border shadow-md py-5 text-black bg-base-100 rounded-md hover:text-[#2550de] hover:bg-base-200 duration-300"
            >
              <div className="w-full h-[250px] flex justify-center items-start">
                <img
                  src="/assets/brand/google-1.png"
                  alt=""
                  className="w-4/5 mx-auto mt-10"
                />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl text-center font-fira-sans mb-5 ">
                  Google
                </h2>
              </div>
            </Link>
            {/* sony  */}
            <Link
              to="/sony"
              className="w-full border shadow-md py-5 text-black bg-base-100 rounded-md hover:text-[#2550de] hover:bg-base-200 duration-300"
            >
              <div className="w-full h-[250px] flex justify-center items-start">
                <img src="/assets/brand/sony-1.png" alt="" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl text-center font-fira-sans mb-5">
                  Sony
                </h2>
              </div>
            </Link>
            {/* samsung */}
            <Link
              to="/samsung"
              className="w-full border shadow-md py-5 text-black bg-base-100 rounded-md hover:text-[#2550de] hover:bg-base-200 duration-300"
            >
              <div className="w-full h-[250px] flex justify-center items-start">
                <img src="/assets/brand/samsung-1.png" alt="mac-logo" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl text-center font-fira-sans mb-5">
                  Samsung
                </h2>
              </div>
            </Link>
            {/* dell */}
            <Link
              to="/dell"
              className="w-full border shadow-md py-5 text-black bg-base-100 rounded-md hover:text-[#2550de] hover:bg-base-200 duration-300"
            >
              <div className="w-full h-[250px] flex justify-center items-start">
                <img src="/assets/brand/dell-1.jpg" alt="" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl text-center font-fira-sans mb-5">
                  Dell
                </h2>
              </div>
            </Link>
          </div>
        </section>
        <section>
          <Partners></Partners>
        </section>
        <section>
          <Offer></Offer>
        </section>
      </main>
    </>
  );
};

export default Home;
