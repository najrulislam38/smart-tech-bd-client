import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, image, name, brandName, type, price, rating, description } =
    product;
  return (
    <div className="border p-5 md:p-10">
      <div className="w-full flex justify-center items-center">
        <img src={image} alt="" />
      </div>
      <div className="my-5">
        <h3 className="text-3xl lg:text-4xl font-fira-sans font-medium">
          {name}
        </h3>
        <div className="flex justify-between items-center py-3">
          <h4 className="text-3xl font-fira-sans">{brandName}</h4>
          <span className="border rounded-md text-lg py-1 px-3 bg-[#EEEEEE] font-medium">
            {type}
          </span>
        </div>
        <div className="flex justify-between items-center p-2">
          <div>
            <Rating initialRating={rating} readonly />
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span>Price: </span>
            <div className="flex gap-1 items-center text-[#FB82A9]">
              <FaDollarSign />
              <span className="font-medium ">{price}</span>
            </div>
          </div>
        </div>
        <p>
          {description.length > 180
            ? description.slice(0, 180)
            : description + "..."}
        </p>
        <div className=" flex items-center gap-5 mt-6">
          <Link to={`/products/${_id}`}>
            <button className="primary-btn">View Details</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="secondary-btn">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
