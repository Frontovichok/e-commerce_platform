import styles from "./WorkingSteps.module.css";
import arrowImg from "./right-arrow.svg";

function WorkingSteps() {
  return (
    <section className={`sectionMainPage ${styles.ourTeam}`}>
      <div className={styles.sectionDarkBackground}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.totalStepsContainer}>
              <p className={styles.totalSteps}>5</p>
              <p className={styles.totalStepsText}>
                Этапов
                <br /> работы с нами
              </p>
            </div>
          </div>
          <div className={styles.middleSide}>
            <img className={styles.arrow} src={arrowImg} />
          </div>
          <div className={styles.rightSide}>
            <ol className={styles.stepsList}>
              <li className={styles.step}>Заявка</li>
              <li className={styles.step}>Консультация</li>
              <li className={styles.step}>Расчет сметы</li>
              <li className={styles.step}>Подписывание договора</li>
              <li className={styles.step}>Доставка материала</li>
              <li className={styles.step}>Монтаж кровли</li>
              <li className={styles.step}>
                Крыша готова,
                <br /> гарантия качества 5 лет
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingSteps;
