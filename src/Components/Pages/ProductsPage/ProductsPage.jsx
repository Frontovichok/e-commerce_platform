import { useLocation } from "react-router-dom";
import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import GlobalContent from "../../GlobalContent/GlobalContent";
import Footer from "../../Footer/Footer";
import CallMe from "../../CallMe/CallMe";
import ProductsNavBar from "../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../ContactWithMe/ContactWithMe";
import styles from "./ProductsPage.module.css";
import Products from "./Products/Products";
import { NavLink } from "react-router-dom";

let products = [
  {
    id: 1,
    title: "Черепица гибкая Mida Прима красный 3 м²",
    img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/15569321.jpg",
    artNumber: "Арт. 12345",
    price: 1000,
    newPrice: 200,
    tags: ["Новая модель"],
  },
  {
    id: 2,
    title: "Профнастил С8 0.35 мм 1200х2000 мм зелёный RAL 6005",
    img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/11756305.jpg",
    artNumber: "Арт. 12345",
    price: 3000,
    newPrice: 2000,
    tags: ["Новинка", "Хит сезона"],
  },
  {
    id: 3,
    title: "Профнастил С20 0.35 мм 1150х2000 мм коричневый RAL 8017",
    img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/12543774.jpg",
    artNumber: "Арт. 12345",
    price: 999,
    newPrice: 99,
    tags: ["Скидка 5%"],
  },
  {
    id: 4,
    title: "Металлочерепица 0.4 мм 2250х1180 мм красный RAL 3005",
    img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/10009260.jpg",
    artNumber: "Арт. 12345",
    price: 100,
    tags: ["Лучшая цена"],
  },
  {
    id: 5,
    title: "Черепица гибкая Mida Прима красный 3 м²",
    img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/15569443.jpg",
    artNumber: "Арт. 12345",
    price: 1000,
    newPrice: 200,
    tags: ["Новая модель"],
  },
  {
    id: 6,
    title: "Профнастил С8 0.35 мм 1200х2000 мм зелёный RAL 6005",
    img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/15569347.jpg",
    artNumber: "Арт. 12345",
    price: 3000,
    newPrice: 2000,
    tags: ["Новинка", "Хит сезона"],
  },
  {
    id: 7,
    title: "Профнастил С20 0.35 мм 1150х2000 мм коричневый RAL 8017",
    img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/17115461.jpg",
    artNumber: "Арт. 12345",
    price: 999,
    newPrice: 99,
    tags: ["Скидка 5%"],
  },
  {
    id: 8,
    title: "Металлочерепица 0.4 мм 2250х1180 мм красный RAL 3005",
    img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/15569304.jpg",
    artNumber: "Арт. 12345",
    price: 100,
    tags: ["Лучшая цена"],
  },
];

function getPageData(pagePath) {
  let pageData = { title: "", products: [] };
  switch (pagePath) {
    case "metallocherepitca":
      pageData = { title: "Металлочерепица", products: products };
      break;
    case "gibkaya_cherepitca":
      pageData = {
        title: "Гибкая черепица",
        products: [...products].reverse(),
      };
      break;
    case "gibkaya_cherepitca":
      pageData = {
        title: "Гибкая черепица",
        products: [...products],
      };
      break;
    case "profnastil":
      pageData = {
        title: "Профнастил",
        products: [...products].reverse(),
      };
      break;
    case "kompositnaya_cherepitca":
      pageData = {
        title: "Композитная черепица",
        products: [...products],
      };
      break;
    case "naturalnaya_cherepitca":
      pageData = {
        title: "Натуральная черепица",
        products: [...products].reverse(),
      };
      break;
    case "falcevaya_cherepitca":
      pageData = {
        title: "Фальцевая черепица",
        products: [...products],
      };
      break;
    case "gidroizolyazionnye_materialy":
      pageData = {
        title: "Гидроизоляционные материалы",
        products: [...products].reverse(),
      };
      break;
    case "kopmplectuyshie":
      pageData = {
        title: "Комплектующие",
        products: [...products],
      };
      break;
    default:
      pageData = {
        title: "ХЗ",
        products: [...products].reverse(),
      };
  }
  return pageData;
}

function ProductsPage() {
  const location = useLocation();
  let currentPagePath = location.pathname.split("/")[2];
  let pageData = getPageData(currentPagePath);
  return (
    <>
      <TopBar />
      <Header />
      <GlobalContent>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <NavLink to="/krovelnye-materialy">Кровельные материалы</NavLink>
            <p>&nbsp; / &nbsp;</p>
            <p>{pageData.title}</p>
          </div>
          <div className={styles.content}>
            <ProductsNavBar />
            <div className={styles.productsContainer}>
              <Products pageData={pageData} />
              <div className={styles.contactWithMe}>
                <ContactWithMe />
              </div>
            </div>
          </div>
        </div>
      </GlobalContent>
      <Footer />
      <CallMe />
    </>
  );
}

export default ProductsPage;
