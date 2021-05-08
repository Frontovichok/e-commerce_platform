import OurTeamMobile from "./Mobile/OurTeamMobile";
import OurTeamDesktop from "./Desktop/OurTeamDesktop";
import styles from "./OurTeam.module.css";

const isMobile = window.innerWidth <= 500;

function OurTeam() {
  return isMobile ? <OurTeamMobile /> : <OurTeamDesktop />;
}

export default OurTeam;
