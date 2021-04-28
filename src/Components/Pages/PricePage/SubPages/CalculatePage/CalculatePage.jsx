import TopBar from "../../../../TopBar/TopBar";
import Header from "../../../../Header/Header";
import GlobalContent from "../../../../GlobalContent/GlobalContent";
import Footer from "../../../../Footer/Footer";
// import styles from "./CalculatePage.module.css";
import Content from "./Content/Content";

function CalculatePage() {
  return (
    <>
      <TopBar />
      <Header />
      <GlobalContent>
        <Content />
      </GlobalContent>
      <Footer />
    </>
  );
}

export default CalculatePage;
