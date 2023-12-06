import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_navbar_list}>
          <li className={styles.header_nav_item}>Thông Báo</li>
          <li className={styles.header_nav_item}>Hỗ Trợ</li>
          <li className={styles.header_nav_item}>Đăng Ký</li>
          <li className={styles.header_nav_item}>Đăng Nhập</li>
        </ul>
      </nav>
      <div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
