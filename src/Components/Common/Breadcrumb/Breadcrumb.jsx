import styles from "./Breadcrumb.module.css";
import { NavLink } from "react-router-dom";

export default function Breadcrumb({ path }) {
  return (
    <div className={styles.breadcrumb}>
      {path.map((item, i) => (
        <>
          {item.link ? (
            <NavLink className={styles.breadcrumbLink} to={item.link}>
              {item.text}
            </NavLink>
          ) : (
            <p className={styles.breadcrumbText}>{item.text}</p>
          )}
        </>
      ))}
    </div>
  );
}
