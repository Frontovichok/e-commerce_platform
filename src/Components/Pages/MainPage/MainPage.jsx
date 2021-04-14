import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import Content from "./Content/Content";
import Footer from "../../Footer/Footer";
import styles from "./MainPage.module.css";
import GlobalContent from "../../GlobalContent/GlobalContent";
import CallMe from "../../CallMe/CallMe";

function MainPage() {
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

export default MainPage;
