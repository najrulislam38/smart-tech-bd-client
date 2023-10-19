import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Sony = () => {
  const loadProducts = useLoaderData();
  const sonyProducts = loadProducts?.filter(
    (product) => product.brandName.toLowerCase() === "Sony".toLowerCase()
  );

  return (
    <div className="max-w-screen-2xl mx-auto my-20 px-5 md:px-10 lg:px-20">
      <div className="grid gap-5 md:grid-cols-2 ">
        {sonyProducts?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Sony;
