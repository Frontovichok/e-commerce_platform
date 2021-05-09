import TopBar from "../../../../TopBar/TopBar";
import Header from "../../../../Header/Header";
import GlobalContent from "../../../../GlobalContent/GlobalContent";
import Footer from "../../../../Footer/Footer";
import Content from "./Content/Content";
// import styles from "./CalculatePage.module.css";

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
