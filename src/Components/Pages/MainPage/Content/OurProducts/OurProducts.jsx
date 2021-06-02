import ProductCard from "./ProductCard/ProductCard";
import styles from "./OurProducts.module.css";
import { useState } from "react";

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

function OurProducts() {
  let [showedProducts, setShowedProducts] = useState(4);
  let showedProductsList = [...products].slice(0, showedProducts);
  return (
    <section className="sectionMainPage">
      <h2 className={"sectionTitle"}>
        {["Каталог товаров"].map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </h2>
      <div className={styles.productList}>
        {showedProductsList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {showedProducts < 8 && (
        <div className={styles.showMoreContainer}>
          <button
            className={styles.showMoreBtn}
            onClick={() => setShowedProducts(showedProducts + 4)}
          >
            Показать еще
          </button>
        </div>
      )}
    </section>
  );
}

export default OurProducts;
