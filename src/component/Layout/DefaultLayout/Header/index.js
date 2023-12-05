import classname from "classname";
import styles from "./Header.module.scss";

const cx = classname.bind(styles);

function Header() {
  return <header className={cx("wrapper")}></header>;
}

export default Header;
