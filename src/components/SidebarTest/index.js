import React from "react";
import classNames from "classnames/bind";
import styles from "./SidebarTest.module.scss";
import { publicRoutes } from "~/Route/Routes";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPenNib, faPlus } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
const SidebarTest = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar", "d-flex align-items-center")}>
        {publicRoutes.map((item, index) =>
          item.name ? (
            <Button
              sidebar
              key={index}
              toActive={item.path}
              leftIcon={item.icon}
            >
              {item.name}
            </Button>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default SidebarTest;
