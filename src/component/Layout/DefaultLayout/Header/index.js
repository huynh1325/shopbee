import classname from "classname";
import styles from "./Header.module.scss";

const cx = classname.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <nav className={cx("header_nav")}>
        <ul className={cx("header_nav_list")}>
          <li className={cx("header_nav_item")}>Kênh Người Bán</li>
          <li className={cx("header_nav_item")}>Tải ứng dụng</li>
          <li className={cx("header_nav_item")}>Kết nối</li>
        </ul>
        <ul className={cx("header_nav_list")}>
          <li className={cx("header_nav_item")}>Thông Báo</li>
          <li className={cx("header_nav_item")}>Hỗ Trợ</li>
          <li className={cx("header_nav_item")}>Tiếng Việt</li>
          <li className={cx("header_nav_item")}>Đăng Ký</li>
          <li className={cx("header_nav_item")}>Đăng Nhập</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
