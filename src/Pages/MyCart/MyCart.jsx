import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProductCard from "./singleProductCard";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedAddProducts = useLoaderData();

  const [displayProducts, setDisplayProducts] = useState(loadedAddProducts);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire(
              "Deleted!",
              "Your purchase product has been deleted.",
              "success"
            );
          });
        const remainingProduct = displayProducts.filter(
          (pro) => pro._id !== id
        );
        setDisplayProducts(remainingProduct);
      }
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20 my-20 min-h-[60vh]">
      {displayProducts?.length < 1 ? (
        <div>
          <h2 className="text-4xl lg:text-5xl text-center font-fira-sans font-medium ">
            You have not added any products yet.{" "}
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl lg:text-5xl text-center font-fira-sans font-medium ">
            My Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {displayProducts?.map((product) => (
              <SingleProductCard
                key={product._id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              ></SingleProductCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
