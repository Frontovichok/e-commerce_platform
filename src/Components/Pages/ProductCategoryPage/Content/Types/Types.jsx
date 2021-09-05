import Type from "./Type/Type";
import styles from "./Types.module.css";

function Types({ subCategories }) {
  console.log(subCategories);
  return (
    <section className={styles.container}>
      <div>
        {/* <h2 className={"sectionTitle"}>
          {["Виды кровли"].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h2> */}
        <div className={styles.typesContainer}>
          {subCategories.map((category, i) => (
            <Type {...category} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Types;
