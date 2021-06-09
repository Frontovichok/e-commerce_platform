import styles from "./OurTeamDesktop.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function OurTeamDesktop(props) {
  return (
    <section className={`sectionMainPage ${styles.ourTeam}`}>
      <div className={styles.sectionDarkBackground}>
        <h2 className={`sectionTitle dark ${styles.sectionTitle}`}>
          {["Наша команда"].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h2>
        <div className={`${styles.container} teamContainer`}>
          {props.workers.map((worker, i) => (
            <div className={styles.workerContainer} key={worker.id}>
              {/* <img
                className={`${styles.avatar} worker_${i + 1}`}
                src={worker.avatar}
                alt="Worker"
              /> */}
              <LazyLoadImage
                className={`${styles.avatar} worker_${i + 1}`}
                alt="Worker"
                effect="opacity"
                src={worker.avatar}
              />
              <div className={styles.aboutWorkerContainer}>
                <p className={styles.name}>{worker.name}</p>
                <label className={styles.position}>{worker.position}</label>
                <p className={styles.description}>{worker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeamDesktop;
