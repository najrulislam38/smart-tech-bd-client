import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Apple = () => {
  const loadProducts = useLoaderData();
  const appleProducts = loadProducts?.filter(
    (product) => product.brandName.toLowerCase() === "Apple".toLowerCase()
  );
  return (
    <div className="max-w-screen-2xl mx-auto my-20 px-5 md:px-10 lg:px-20">
      <div className="grid gap-5 md:grid-cols-2 ">
        {appleProducts?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Apple;
