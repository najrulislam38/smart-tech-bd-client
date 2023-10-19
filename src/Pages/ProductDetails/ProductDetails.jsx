import { Link, useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

const ProductDetails = () => {
  const product = useLoaderData();
  // console.log(product);
  const { image, name, brandName, type, price, description } = product;
  return (
    <div className="max-w-screen-2xl mx-auto my-20 px-5 md:px-10 lg:px-20">
      <div className="max-w-2xl mx-auto p-5 md:p-10  bg-base-100">
        <div className="w-full flex justify-center items-center">
          <img src={image} alt="" />
        </div>
        <div className="mt-20 mb-5">
          <span className="border rounded-md text-lg py-1  px-3 bg-[#EEEEEE] font-medium">
            {type}
          </span>
          <h3 className="text-3xl lg:text-4xl font-fira-sans font-medium py-2">
            Name: <span className="text-gray-600">{name}</span>
          </h3>
          <h4 className="text-3xl font-fira-sans">
            Brand Name: <span className="text-gray-600">{brandName}</span>
          </h4>
          <div className="flex items-center gap-2 text-lg  py-2">
            <span>Price: </span>
            <div className="flex gap-1 items-center text-[#FB82A9]">
              <FaDollarSign />
              <span className="font-medium ">{price}</span>
            </div>
          </div>
          <p>
            <span className=" text-black font-medium">Description: </span>{" "}
            {description}
          </p>
          <div className=" flex items-center gap-5 mt-6">
            <Link>
              <button className="primary-btn">Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
