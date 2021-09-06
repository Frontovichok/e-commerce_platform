import styles from "./Breadcrumb.module.css";
import { NavLink } from "react-router-dom";

export default function Breadcrumb({ path }) {
  return (
    <div className={styles.breadcrumb}>
      {path.map((item, i) => (
        <div key={i}>
          {item.link ? (
            <NavLink className={styles.breadcrumbLink} to={item.link}>
              {item.text}
            </NavLink>
          ) : (
            <p
              className={`${styles.breadcrumbText}
                ${item.text === "/" && styles.breadcrumbSlash}`}
            >
              {item.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
