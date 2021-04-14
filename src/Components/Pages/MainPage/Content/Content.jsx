import CalculatePrice from "./CalculatePrice/CalculatePrice";
import Carousel from "./Carousel/Carousel";
import styles from "./Content.module.css";
import Services from "./Services/Services";

function Content() {
  return (
    <>
        <Carousel />
        <Services />
        {/* <CalculatePrice /> */}
    </>
  );
}

export default Content;
