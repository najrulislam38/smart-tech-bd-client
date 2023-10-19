const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const product = {
      image,
      name,
      brandName,
      type,
      price,
      rating,
      description,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-5 md:px-10 lg:px-20 flex justify-center items-center ">
      <div className="w-full">
        <h1 className="text-3xl text-center">Add Product</h1>
        <div className="max-w-3xl mx-auto flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image </span>
              </label>
              <input
                type="text"
                placeholder="Image"
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
                id=""
                placeholder="Write your opinion"
                className="input input-bordered"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn primary-btn">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
