import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { signInWithGoogle, createUser, setProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);

    // password validation for at least 6 character.
    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password should be at least 6 characters",
      });
    }

    // password validation for at least one capital letter.
    if (!/(?=.*[A-Z])/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should have at least one uppercase letter.",
      });
    }

    // password validation for at least  one specific character.
    if (!/(?=.*[@#$%^&+=!])/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should have at least one specific character.",
      });
    }

    createUser(email, password)
      .then(() => {
        // console.log(result.user);
        setProfile(name, photo).then(() => {
          Swal.fire("Successful!", "Sign up successfully.!", "success");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // sign in use google
  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then(() => {
        // console.log(result.user);
        Swal.fire("Successful!", "Sign In successfully.!", "success");
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="w-full md:my-10 lg:my-20 flex justify-center items-center">
      <div className="card pb-10 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleCreateUser} className="card-body">
          <h2 className="text-4xl font-fira-sans font-semibold">Sign Up</h2>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo"
              name="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
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
              name="password"
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
            <button type="submit" className="btn primary-btn">
              Sign UP
            </button>
          </div>
          <p className="mt-3">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-[#2550de] font-medium font-fira-sans "
            >
              Please Sign In
            </Link>
          </p>
        </form>
        <div className="divider mx-7 font-medium">Or</div>
        <div className="">
          <div
            onClick={handleSignInGoogle}
            className="flex flex-row-reverse justify-between items-center mx-7 border py-2 px-3 rounded-full  cursor-pointer"
          >
            <span className="font-medium font-fira-sans">
              Sign up with google
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

export default Register;
