import { useLocation } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "./Navbbar/Navbar";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" ? (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
        </div>
      )}
    </div>
  );
};

export default Header;
