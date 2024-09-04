import React from "react";
import classNames from "classnames/bind";
import styles from "./AdminLayout.module.scss";
const cx = classNames.bind(styles);
const AdminLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("body")}>{children}</div>
    </div>
  );
};

export default AdminLayout;
