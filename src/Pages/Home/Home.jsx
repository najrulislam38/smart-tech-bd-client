import Footer from "../../Components/Footer/Footer";
import Offer from "./Offer/Offer";

const Home = () => {
  return (
    <>
      <main className="footer max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20">
        <Offer></Offer>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
