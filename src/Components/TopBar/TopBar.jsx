import TopBarContent from './TopBarContent/TopBarContent'
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <>
      <div className={styles.container}>
        <TopBarContent />
      </div>
    </>
  );
}

export default TopBar;
