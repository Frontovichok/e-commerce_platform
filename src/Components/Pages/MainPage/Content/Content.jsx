import CalculatePrice from "./CalculatePrice/CalculatePrice";
import Carousel from "./Carousel/Carousel";
import styles from "./Content.module.css";
import OurProducts from "./OurProducts/OutProducts";
import Services from "./Services/Services";

function Content() {
  return (
    <>
        <Carousel />
        <Services />
        <OurProducts />
    </>
  );
}

export default Content;
