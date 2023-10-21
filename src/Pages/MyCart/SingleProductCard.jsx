import PropTypes from "prop-types";

const SingleProductCard = ({ product, handleDeleteProduct }) => {
  const { _id, image, name, brandName, type, price } = product;

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className=" flex flex-col md:flex-row  gap-6  border p-8 shadow-md text-black bg-base-100 rounded-md  "
    >
      <div className="w-full md:w-1/2  flex justify-center items-center flex-1">
        <img src={image} alt="" className="w-4/5" />
      </div>
      <div className="w-full md:w-1/2 ">
        <span className="border rounded-md text-base py-1 px-3 bg-[#EEEEEE] text-[#2550de] font-medium">
          {type}
        </span>
        <h2 className="text-xl font-fira-sans pt-3 font-medium">{name}</h2>
        <h3 className="text-xl font-medium">Brand: {brandName}</h3>
        <p className="">
          <span className="text-black font-medium">Price: </span>
          {price}
        </p>
        <div className="py-2">
          <button
            onClick={() => handleDeleteProduct(_id)}
            className="primary-btn"
          >
            Delete
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
