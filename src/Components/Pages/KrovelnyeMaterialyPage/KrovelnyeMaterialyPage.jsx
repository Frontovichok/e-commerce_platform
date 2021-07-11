import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import GlobalContent from "../../GlobalContent/GlobalContent";
import Footer from "../../Footer/Footer";
import Content from "./Content/Content";
import CallMeFixedBlock from "../../Common/CallMeFixedBlock/CallMeFixedBlock";
// import styles from './KrovelnyeMaterialyPage.module.css'

function KrovelnyeMaterialyPage() {
  return (
    <>
      
      <GlobalContent>
        <Content />
      </GlobalContent>
      <CallMeFixedBlock />
    </>
  );
}

export default KrovelnyeMaterialyPage;
