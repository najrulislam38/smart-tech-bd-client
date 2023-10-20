import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h1
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="text-9xl text-center font-fira-sans font-medium"
        >
          404
        </h1>
        <h2 className="text-3xl text-center mb-6">
          Sorry, Something is Wrong.
        </h2>
        <div className="text-center">
          <Link to={"/"}>
            <button className="primary-btn text-center">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
