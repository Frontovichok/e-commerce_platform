import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import GlobalContent from "../../GlobalContent/GlobalContent";
import Footer from "../../Footer/Footer";
import Content from "./Content/Content";
import CallMeFixedBlock from "../../Common/CallMeFixedBlock/CallMeFixedBlock";
import Mobile from "./Content/Mobile/Mobile";
// import styles from "./PricePage.module.css";

function PricePage() {
  return (
    <>
      <GlobalContent>
        <Content />
      </GlobalContent>
      <CallMeFixedBlock />
    </>
  );
}

export default PricePage;
