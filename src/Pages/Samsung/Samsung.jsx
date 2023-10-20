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

const Samsung = () => {
  const loadProducts = useLoaderData();
  const samsungProducts = loadProducts?.filter(
    (product) => product.brandName.toLowerCase() === "Samsung".toLowerCase()
  );

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20"
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
              <img src="/assets/slider/samsung-slider-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/slider/samsung-slider-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/slider/samsung-slider-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-20  ">
          {samsungProducts?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Samsung;
