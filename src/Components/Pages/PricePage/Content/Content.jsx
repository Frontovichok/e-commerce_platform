import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import PriceNavBar from "../PriceNavBar/PriceNavBar";
import styles from "./Content.module.css";

function Content() {
  return (
    <div>
      <section className="section">
        <div className={styles.breadcrumb}>
          <p>Цены</p>
        </div>
        <div className={styles.content}>
          <ProductsNavBar products={products} />
          <div className={styles.tableContainer}>
            <h2 className={"sectionTitle"}>Цены за работу</h2>
            <table id="service-price" className={`${styles.priceTable}`}>
              <thead>
                <tr>
                  <th>Наименование работы</th>
                  <th>Цена, руб.</th>
                  <th>Ед.изм.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Монтаж стропильной конструкции кровли
                  </td>
                </tr>
                <tr>
                  <td>Монтаж стропильной системы</td>
                  <td>390-550</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Монтаж мауэрлата</td>
                  <td>180-260</td>
                  <td>пог. м.</td>
                </tr>
                <tr>
                  <td>Антисептирование пиломатериалов (огнебио защита)</td>
                  <td>50-80</td>
                  <td>м2</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Монтаж обрешетки
                  </td>
                </tr>
                <tr>
                  <td>Устройство контробрешетки</td>
                  <td>70-120</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Устройство шаговой обрешетки</td>
                  <td>110-190</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Устройство сплошной обрешетки из доски</td>
                  <td>150-210</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>
                    Устройство сплошной обрешетки (настила) из фанеры или ОСП-3
                    по готовому основанию
                  </td>
                  <td>100-160</td>
                  <td>м2</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Устройство изоляции кровли
                  </td>
                </tr>
                <tr>
                  <td>Монтаж пароизоляции</td>
                  <td>50-80</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Монтаж гидроизоляции (гидроветрозащиты)</td>
                  <td>50-80</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>
                    Укладка утеплителя толщиной 150-200 мм (утепление кровли)
                  </td>
                  <td>150-190</td>
                  <td>м2</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Монтаж кровельного покрытия
                  </td>
                </tr>
                <tr>
                  <td>Монтаж битумной гибкой черепицы</td>
                  <td>220-420</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Монтаж металлочерепицы/профнастила</td>
                  <td>200-370</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Монтаж натуральной и керамической черепицы</td>
                  <td>440-590</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Монтаж цементно-песчаной черепицы</td>
                  <td>440-590</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Монтаж композитной черепицы</td>
                  <td>360-380</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>
                    Монтаж фальцевой кровли (медь, цинк-титан, сталь с
                    покрытием)
                  </td>
                  <td>250-750</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Монтаж сланцевой кровли (кровельный сланец)</td>
                  <td>1100-1500</td>
                  <td>м2</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Установка дополнительных элементов и комплектующих
                  </td>
                </tr>
                <tr>
                  <td>Устройство примыканий к стенам/трубам</td>
                  <td>190-550</td>
                  <td>пог. м.</td>
                </tr>
                <tr>
                  <td>
                    Устройство битумной гидроизоляции (подкладочный ковер)
                  </td>
                  <td>50-120</td>
                  <td>м2</td>
                </tr>
                <tr>
                  <td>Установка системы снегозадержания</td>
                  <td>250-330</td>
                  <td>пог. м.</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Подшивка карнизных и фронтонных свесов
                  </td>
                </tr>
                <tr>
                  <td>Устройство каркаса карнизных и фронтонных свесов</td>
                  <td>230-320</td>
                  <td>пог.м.</td>
                </tr>
                <tr>
                  <td>
                    Подшивка карнизных и торцевых свесов пластиковыми панелями
                    (софит)
                  </td>
                  <td>250-370</td>
                  <td>пог.м.</td>
                </tr>
                <tr>
                  <td>Подшивка карнизных и торцевых свесов доской</td>
                  <td>400-520</td>
                  <td>пог.м.</td>
                </tr>
                <tr>
                  <td>Окраска деревянных поверхностей в 2 слоя</td>
                  <td>50-90</td>
                  <td>пог.м.</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Монтаж водосточной системы
                  </td>
                </tr>
                <tr>
                  <td>Монтаж водосточных желобов</td>
                  <td>265-420</td>
                  <td>пог.м.</td>
                </tr>
                <tr>
                  <td>Монтаж водосточных труб</td>
                  <td>245-420</td>
                  <td>пог.м.</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Установка мансардных окон
                  </td>
                </tr>
                <tr>
                  <td>Монтаж мансардных окон в ходе кровельных работ</td>
                  <td>2500-3800</td>
                  <td>шт.</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Фасадные работы
                  </td>
                </tr>
                <tr>
                  <td>Монтаж сайдинга ПВХ/сталь</td>
                  <td>270-350</td>
                  <td>м2</td>
                </tr>

                <tr>
                  <td colSpan="3" className={styles.titleItems}>
                    Прочие работы
                  </td>
                </tr>
                <tr>
                  <td>Монтаж рамных лесов при высоте строения до 10 м</td>
                  <td>80</td>
                  <td>м2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;

let products = [
  {
    name: "Композитные материалы",
    products: [
      {
        link: "/krovelnye-materialy/metallocherepitca",
        name: "Металлочерепица",
      },
      {
        link: "/krovelnye-materialy/gibkaya_cherepitca",
        name: "Гибкая черепица",
      },
      {
        link: "/krovelnye-materialy/profnastil",
        name: "Профнастил",
      },
      {
        link: "/krovelnye-materialy/kompositnaya_cherepitca",
        name: "Композитная черепица",
      },
      {
        link: "/krovelnye-materialy/naturalnaya_cherepitca",
        name: "Натуральная черепица",
      },
      {
        link: "/krovelnye-materialy/falcevaya_cherepitca",
        name: "Фальцевая черепица",
      },
      {
        link: "/krovelnye-materialy/gidroizolyazionnye_materialy",
        name: "Рулонные гидроизоляционные материалы",
      },
      {
        link: "/krovelnye-materialy/kopmplectuyshie",
        name: "Комплектующие",
      },
    ],
  },
  {
    name: "Фасадные системы",
    products: [
      {
        link: "/fasadnye-sistemy/1",
        name: "1",
      },
      {
        link: "/fasadnye-sistemy/2",
        name: "2",
      },
      {
        link: "/fasadnye-sistemy/3",
        name: "3",
      },
      {
        link: "/fasadnye-sistemy/4",
        name: "4",
      },
    ],
  },
];
