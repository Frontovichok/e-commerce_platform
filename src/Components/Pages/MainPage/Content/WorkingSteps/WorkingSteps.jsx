import styles from "./WorkingSteps.module.css";
import arrowImg from "./right-arrow.svg";

function WorkingSteps() {
  return (
    <section className={`sectionMainPage ${styles.WorkingSteps}`}>
      <div className={styles.sectionDarkBackground}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.totalStepsContainer}>
              <p className={styles.totalSteps}>5</p>
              <p className={styles.totalStepsText}>
                Этапов <br />
                для получения результата
              </p>
            </div>
          </div>
          <div className={styles.middleSide}>
            <img className={styles.arrow} src={arrowImg} alt="Arrow" />
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
    </section>
  );
}

export default WorkingSteps;
