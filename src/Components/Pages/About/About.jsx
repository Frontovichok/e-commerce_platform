import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import GlobalContent from "../../GlobalContent/GlobalContent";
import Footer from "../../Footer/Footer";
import Content from "./Content/Content";
import CallMe from "../../CallMe/CallMe";
// import styles from "./About.module.css";

function About() {
  return (
    <>
      <TopBar />
      <Header />
      <GlobalContent>
        <Content />
      </GlobalContent>
      <Footer />
      <CallMe />
    </>
  );
}

export default About;
