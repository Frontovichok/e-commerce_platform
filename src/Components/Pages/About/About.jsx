import GlobalContent from "../../GlobalContent/GlobalContent";
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
