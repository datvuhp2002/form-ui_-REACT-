import config from "~/config";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faHome } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "~/pages/ADMIN/Dashbroad";
import FooterOnly from "~/layout/FooterOnly";
import Test from "~/pages/Test";
import TestLayout from "~/layout/TestLayout";
const publicRoutes = [
  {
    path: config.routes.login,
    component: Login,
    layout: FooterOnly,
  },
  {
    path: config.routes.test,
    component: Test,
    layout: TestLayout,
    name: "Trang chủ",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  // {
  //   path: config.routes.test,
  //   component: Home,
  //   name: "Trang chủ",
  //   icon: <FontAwesomeIcon icon={faHome} />,
  // },
];
const privateRoutes = [
  {
    path: config.routes.home,
    component: Home,
    name: "Trang chủ",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    path: config.routes.home,
    component: Home,
    name: "Trang chủ",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    path: config.routes.home,
    component: Home,
    name: "Trang chủ",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
];
const adminRoutes = [
  {
    name: "Bảng tin",
    path: config.routesAdmin.dashboard,
    component: Dashboard,
    icon: <FontAwesomeIcon icon={faDashboard} />,
  },
];
export { publicRoutes, privateRoutes, adminRoutes };
