import styles from "./Advaces.module.css";

function Advaces() {
  return (
    <section className={styles.advaces}>
      <h2 className={`sectionTitle ${styles.sectionTitle}`}>
        {["Рекомендации при выборе кровли"].map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </h2>
      <div className={styles.articles}>
        <article className={styles.article}>
          <h2 className={styles.title}>Определяем тип дома</h2>
          <p className={styles.description}>
            Для упрощения адаптации пользователей к особенностям реализации
            мандатного контроля целостности, при установке обновления значение
            мандатного атрибута ccnri принудительно фиксируется во включенном
            состоянии для всех каталогов файловой системы.
          </p>
          <ul>
            <li>lsdjk</li>
            <li>adlllllj aslkj sd ds</li>
            <li>lkoi akds i</li>
            <li>lkoi ljuuh a</li>
          </ul>
        </article>
        <article className={styles.article}>
          <h2 className={styles.title}>Определяем тип хуема</h2>
          <p className={styles.description}>
            Для упрощения адаптации пользователей к особенностям реализации
            мандатного контроля целостности, при установке обновления значение
            мандатного атрибута ccnri принудительно фиксируется во включенном
            состоянии для всех каталогов файловой системы.
          </p>
        </article>
        <article className={styles.article}>
          <h2 className={styles.title}>Определяем тип заема</h2>
          <p className={styles.description}>
            Для упрощения адаптации пользователей к особенностям реализации
            мандатного контроля целостности, при установке обновления значение
            мандатного атрибута ccnri принудительно фиксируется во включенном
            состоянии для всех каталогов файловой системы.
          </p>
          <ul>
            <li>lsdjk</li>
            <li>adlllllj aslkj sd ds</li>
            <li>lkoi akds i</li>
            <li>lkoi ljuuh a</li>
          </ul>
        </article>
        <article className={styles.article}>
          <h2 className={styles.title}>Определяем тип пизема</h2>
          <p className={styles.description}>
            Для упрощения адаптации пользователей к особенностям реализации
            мандатного контроля целостности, при установке обновления значение
            мандатного атрибута ccnri принудительно фиксируется во включенном
            состоянии для всех каталогов файловой системы.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Advaces;
