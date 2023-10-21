import { useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Rating } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
  const product = useLoaderData();

  const { user } = useContext(AuthContext);

  const email = user?.email;
  // console.log(product);
  const { image, name, brandName, type, price, rating, description } = product;

  const newProduct = {
    image,
    name,
    brandName,
    type,
    price,
    rating,
    description,
    email,
  };

  const handleAddProduct = () => {
    fetch("https://smart-tech-bd-server.vercel.app/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire("Successful!", "Add to Cart success.!", "success");
        }
      });
  };
  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="max-w-screen-2xl mx-auto py-20 px-5 md:px-10 lg:px-20"
    >
      <div className="max-w-4xl mx-auto p-5 bg-base-100 text-black md:p-10 lg:flex justify-between items-center rounded-lg">
        <div className="w-full lg:w-2/5 flex justify-center items-center ">
          <img src={image} alt="" className="w-1/2 lg:w-full lg:p-10 " />
        </div>
        <div className="mt-10 lg:mt-0 mb-5 w-full lg:w-3/5">
          <span className="border rounded-md text-lg py-1  px-3 bg-[#EEEEEE] text-[#2550de] font-medium">
            {type}
          </span>
          <h3 className="text-2xl lg:text-3xl font-fira-sans font-medium py-2">
            Name: <span className="text-gray-600">{name}</span>
          </h3>
          <h4 className="text-xl font-fira-sans">
            Brand Name: <span className="text-gray-600">{brandName}</span>
          </h4>
          <div className="mt-3 flex items-center gap-2 ">
            <span className="font-fira-sans font-medium ">Rating: </span>
            <Rating
              name="half-rating"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="flex items-center gap-2 text-lg  py-2">
            <span>Price: </span>
            <div className="flex gap-1 items-center text-[#FB82A9]">
              <FaDollarSign />
              <span className="font-medium ">{price}</span>
            </div>
          </div>
          <p>
            <span className="text-black font-medium">Description: </span>{" "}
            {description}
          </p>
          <div className=" flex items-center gap-5 mt-6">
            <button
              onClick={handleAddProduct}
              className="primary-btn flex items-center gap-2"
            >
              Add to Cart <AiOutlineShoppingCart className=" text-xl " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
