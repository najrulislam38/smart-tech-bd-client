import PropTypes from "prop-types";

const SingleProductCard = ({ product, handleDeleteProduct }) => {
  const { _id, image, name, brandName, type, price } = product;

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className=" flex flex-col gap-6 min-h-[450px] border p-8 shadow-md "
    >
      <div className="w-full  flex justify-center items-center flex-1">
        <img src={image} alt="" className="w-[200px] h-[200px]" />
      </div>
      <div className="w-full ">
        <span className="border rounded-md text-lg py-1 px-3 bg-[#EEEEEE] text-[#2550de] font-medium">
          {type}
        </span>
        <h2 className="text-2xl font-fira-sans pt-3 font-medium">{name}</h2>
        <h3 className="text-xl font-medium">{brandName}</h3>
        <p className="">
          <span className="text-black font-medium">Price: </span>
          {price}
        </p>
        <div className="py-5">
          <button
            onClick={() => handleDeleteProduct(_id)}
            className="primary-btn"
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

SingleProductCard.propTypes = {
  product: PropTypes.object,
  handleDeleteProduct: PropTypes.func,
};

export default SingleProductCard;
