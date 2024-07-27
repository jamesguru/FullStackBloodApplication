import Contact from "../components/Contact";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>

      <Element name="featured">
        <Featured />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default Home;
