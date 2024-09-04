import React from "react";
import classNames from "classnames/bind";
import styles from "./defaultlayout.module.scss";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header isPublicRoute={false} />
      <Sidebar />
      <div className={cx("body", "mb-5")}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
