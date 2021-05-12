import PopUpWindow from "../../../PopUpWindow/PopUpWindow";
import Carousel from "./Carousel/Carousel";
import ContactWithMe from '../../../ContactWithMe/ContactWithMe';
import News from "./News/News";
import OurProducts from "./OurProducts/OutProducts";
import OurTeam from "./OurTeam/OurTeam";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import WhyWe from "./WhyWe/WhyWe";
import WorkingSteps from "./WorkingSteps/WorkingSteps";
// import styles from "./Content.module.css";

function Content() {
  return (
    <>
      <Carousel />
      <Services />
      <WhyWe />
      <OurProducts />
      <OurTeam />
      <Reviews />
      <News />
      <WorkingSteps />
      <ContactWithMe />
      <PopUpWindow />
    </>
  );
}

export default Content;
