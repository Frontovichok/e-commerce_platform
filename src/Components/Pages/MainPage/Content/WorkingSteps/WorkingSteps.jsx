import styles from "./WorkingSteps.module.css";
import arrowImg from "./right-arrow.svg";
import ContactWithMe from "./ContactWithMe/ContactWithMe";

function WorkingSteps() {
  return (
    <section className={`sectionMainPage ${styles.ourTeam}`}>
      <div className={styles.sectionDarkBackground}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.totalStepsContainer}>
              <p className={styles.totalSteps}>5</p>
              <p className={styles.totalStepsText}>Этапов работы с нами</p>
            </div>
          </div>
          <div className={styles.middleSide}>
            <img className={styles.arrow} src={arrowImg} />
          </div>
          <div className={styles.rightSide}>
            <ol className={styles.stepsList}>
              <li className={styles.step}>Консультация</li>
              <li className={styles.step}>Расчет сметы</li>
              <li className={styles.step}>Подписание договора</li>
              <li className={styles.step}>Доставка материала</li>
              <li className={styles.step}>Монтаж кровли</li>
            </ol>
          </div>
        </div>
      </div>
      <ContactWithMe />
    </section>
  );
}

export default WorkingSteps;
