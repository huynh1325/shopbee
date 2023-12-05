import { HeaderFooter } from "~/component/Layout";
import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Profile from "~/pages/Profile";
import Login from "~/pages/Login";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  { path: "/profile", component: Profile },
  { path: "/login", component: Login, layout: HeaderFooter },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
