import Service from "./Service/Service";
import styles from "./Services.module.css";

function Services() {
  return (
    <section className="sectionMainPage">
      <div>
        <h2 className={"sectionTitle"}>Услуги</h2>
        <div className={styles.servicesContainer}>{servicesList.map((service, i) => <Service {...service}/>)}</div>
      </div>
    </section>
  );
}

let servicesList = [
  {
    title: "Монтаж (устройство) мембранной кровли из ПВХ",
    img:
      "https://кровля-в-москве.рф/sites/default/files/styles/new/public/polimernye-membrany-gallery-12.png?itok=ihxv8eqP",
    sticker: "Мембранная ПВХ кровля",
    description: "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf"
  },
  {
    title: "монтаж мягкой кровли",
    img:
      "https://кровля-в-москве.рф/sites/default/files/styles/new/public/remont-krovli-krishy.jpg?itok=QTNL25_G",
    sticker: "Мягкая кровля",
    description: "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf"
  },
  {
    title: "Наплавляемая кровля, ремонт, монтаж, обслуживание",
    img:
      "https://кровля-в-москве.рф/sites/default/files/styles/new/public/naplav.jpg?itok=7SRJsVGa",
    sticker: "Наплавляемая кровля",
    description: "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf"
  },
  {
    title: "Монтаж и ремонт кровли из металлочерепицы",
    img:
      "https://кровля-в-москве.рф/sites/default/files/styles/new/public/fa97f11bb4ee7e7954824fcf12a26778.jpg?itok=7aBHpVyu",
    sticker: "Металлочерепица",
    description: "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf"
  },
  {
    title: "Монтаж и ремонт кровли из ондулина",
    img:
      "https://кровля-в-москве.рф/sites/default/files/styles/new/public/ondulinmon3t.jpg?itok=kT9ctF4X",
    sticker: "Ондулин (Еврошифер)",
    description: "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf"
  },
  {
    title: "Монтаж и ремонт кровли из натуральной черепицы",
    img:
      "https://кровля-в-москве.рф/sites/default/files/styles/new/public/tile-1591715_1920.jpg?itok=3rWt9kI4",
    sticker: "Натуральная черепица",
    description: "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf"
  },
];

export default Services;
