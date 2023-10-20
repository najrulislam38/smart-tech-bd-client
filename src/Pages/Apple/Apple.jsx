import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Apple = () => {
  const loadProducts = useLoaderData();
  const { loading } = useContext(AuthContext);

  const appleProducts = loadProducts?.filter(
    (product) => product.brandName.toLowerCase() === "Apple".toLowerCase()
  );

  if (loading) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </>
    );
  }

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="max-w-screen-2xl mx-auto  px-5 md:px-10 lg:px-20"
    >
      <div>
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/assets/slider/apple-slider-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/slider/apple-slider-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/slider/apple-slider-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div className="py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {appleProducts?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apple;
