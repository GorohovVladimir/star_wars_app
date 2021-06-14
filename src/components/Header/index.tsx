import Menu from "./components/Menu";
import menuItems from "../../system/menu.json";

import styles from "./style.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrap}>
        <Menu items={menuItems} />
      </div>
    </header>
  );
}

export default Header;
