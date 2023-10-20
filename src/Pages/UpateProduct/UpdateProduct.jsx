import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  console.log(product);

  const { _id, image, name, brandName, type, price, rating, description } =
    product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updateProduct = {
      image,
      name,
      brandName,
      type,
      price,
      rating,
      description,
    };
    // console.log(updateProduct);

    fetch(`https://smart-tech-bd-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Successful!", "Update successfully.!", "success");
        }
      });
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="max-w-screen-2xl mx-auto py-10 px-5 md:px-10 lg:px-20 flex justify-center items-center "
    >
      <div className="w-full">
        <h1 className="text-3xl text-center font-fira-sans font-medium">
          Update Product
        </h1>
        <div className="max-w-3xl mx-auto flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateProduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image </span>
              </label>
              <input
                type="text"
                placeholder="Image"
                defaultValue={image}
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={name}
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                defaultValue={brandName}
                name="brandName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type of Product</span>
              </label>
              <input
                type="text"
                placeholder="Only Technology and Electronics"
                defaultValue={type}
                name="type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                defaultValue={price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                defaultValue={rating}
                name="rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                id=""
                placeholder="Write your opinion"
                className="input input-bordered"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn primary-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
