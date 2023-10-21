import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProductCard from "./singleProductCard";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
  const loadedAddProducts = useLoaderData();
  const [displayProducts, setDisplayProducts] = useState(loadedAddProducts);
  const { user, loading } = useContext(AuthContext);

  const email = user.email;

  // console.log(email);

  useEffect(() => {
    const userProducts = loadedAddProducts?.filter(
      (product) => product.email === email
    );
    setDisplayProducts(userProducts);
  }, [loadedAddProducts, email]);

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
        fetch(`https://smart-tech-bd-server.vercel.app/addProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your purchase product has been deleted.",
                "success"
              );
            }
          });
        const remainingProduct = displayProducts.filter(
          (pro) => pro._id !== id
        );
        setDisplayProducts(remainingProduct);
      }
    });
  };

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
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20 py-20 min-h-[90vh]"
    >
      {displayProducts?.length < 1 ? (
        <div>
          <h2 className="text-4xl lg:text-5xl text-center font-fira-sans font-medium ">
            You have not added any products yet.{" "}
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl lg:text-4xl text-center font-fira-sans font-medium ">
            My Products
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mt-10">
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
