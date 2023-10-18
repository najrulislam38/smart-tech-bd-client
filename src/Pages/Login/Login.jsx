import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "Sign In successful.!", "success");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div className="w-full md:my-10 lg:my-20 flex justify-center items-center">
      <div className="card pb-10 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="text-4xl font-fira-sans font-semibold">Sign In</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn primary-btn">Sign In</button>
          </div>
          <p className="mt-3">
            If do not have an account?{" "}
            <Link
              to={"/register"}
              className="text-[#2550de] font-medium font-fira-sans "
            >
              Please Sign Up
            </Link>
          </p>
        </form>
        <div className="divider mx-7 font-medium">Or</div>
        <div className="">
          <div
            onClick={handleSignInGoogle}
            className="flex flex-row-reverse justify-between items-center mx-7 border py-2 px-3 rounded-full  cursor-pointer hover:bg-base-200"
          >
            <span className="font-medium font-fira-sans">
              Sign in with google
            </span>
            <img
              src="/assets/google-icons.png"
              alt=""
              className="w-10 h-10 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
