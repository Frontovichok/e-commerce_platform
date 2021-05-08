import styles from "./OurTeamDesktop.module.css";

function OurTeamDesktop() {
  return (
    <section className={`sectionMainPage ${styles.ourTeam}`}>
      <div className={styles.sectionDarkBackground}>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>Наша команда</h2>
        <div className={styles.container}>
          <div className={styles.workerContainer}>
            <div className={`${styles.avatar} ${styles.worker_1}`}></div>
            <div className={styles.aboutWorkerContainer}>
              <p className={styles.name}>Иванов Иван</p>
              <label className={styles.position}>Старший менеджер</label>
              <p className={styles.description}>
                Классный чел, но иногда кидает на бабки
              </p>
            </div>
          </div>
          <div className={styles.workerContainer}>
            <div className={`${styles.avatar} ${styles.worker_2}`}></div>
            <div className={styles.aboutWorkerContainer}>
              <p className={styles.name}>Иванов Антон</p>
              <label className={styles.position}>Старший менеджер</label>
              <p className={styles.description}>
                Классный чел, но иногда кидает на бабки
              </p>
            </div>
          </div>
          <div className={styles.workerContainer}>
            <div className={`${styles.avatar} ${styles.worker_3}`}></div>
            <div className={styles.aboutWorkerContainer}>
              <p className={styles.name}>Иванов Сергей</p>
              <label className={styles.position}>Старший менеджер</label>
              <p className={styles.description}>
                Классный чел, но иногда кидает на бабки
              </p>
            </div>
          </div>
          <div className={styles.workerContainer}>
            <div className={`${styles.avatar} ${styles.worker_4}`}></div>
            <div className={styles.aboutWorkerContainer}>
              <p className={styles.name}>Иванов Магомед</p>
              <label className={styles.position}>Старший менеджер</label>
              <p className={styles.description}>
                Классный чел, но иногда кидает на бабки
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeamDesktop;
