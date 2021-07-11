import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import GlobalContent from "../../GlobalContent/GlobalContent";
import Footer from "../../Footer/Footer";
import Content from "./Content/Content";
import CallMeFixedBlock from "../../Common/CallMeFixedBlock/CallMeFixedBlock";
// import styles from "./About.module.css";

function About() {
  return (
    <>
      <GlobalContent>
        <Content />
      </GlobalContent>
      <CallMeFixedBlock />
    </>
  );
}

export default About;
