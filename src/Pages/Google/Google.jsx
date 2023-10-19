import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Google = () => {
  const loadProducts = useLoaderData();
  const googleProducts = loadProducts?.filter(
    (product) => product.brandName.toLowerCase() === "Google".toLowerCase()
  );

  return (
    <div className="max-w-screen-2xl mx-auto my-20 px-5 md:px-10 lg:px-20">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3  ">
        {googleProducts?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Google;
