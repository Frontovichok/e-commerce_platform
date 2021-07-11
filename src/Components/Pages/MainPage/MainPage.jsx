import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import Content from "./Content/Content";
import Footer from "../../Footer/Footer";
import GlobalContent from "../../GlobalContent/GlobalContent";
import CallMeFixedBlock from "../../Common/CallMeFixedBlock/CallMeFixedBlock";

function MainPage() {
  return (
    <>
      <GlobalContent>
        <Content />
      </GlobalContent>
      <CallMeFixedBlock />
    </>
  );
}

export default MainPage;
