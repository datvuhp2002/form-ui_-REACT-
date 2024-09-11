import React from "react";
import classNames from "classnames/bind";
import styles from "./Test.module.scss";
import Logo from "~/public/assets/images/logo.png";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

const Test = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("child-1", "d-flex justify-content-center my-5")}>
        <img src="https://datvuhp2002.github.io/nccinterview/static/media/logoNCC1.b1873bd3aa1b13aac851.jpg" />
      </div>
      <div className={cx("child-2", "d-flex flex-column align-items-center ")}>
        <h2>
          <strong>Lorem ipsum dolor sit asmet?</strong>
        </h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </span>
      </div>
      <div className={cx("child-3", "d-flex")}>
        <div className={cx("ci")}>
          <h2>ABC</h2>
          <div className={cx("item")}>
            <img src="https://datvuhp2002.github.io/nccinterview/static/media/cssicon.f0206779c57662ba78b7.png"></img>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </span>
          </div>
        </div>
        <div className={cx("ci")}>
          <h2>ABC</h2>
          <div className={cx("item")}>
            <img src="https://datvuhp2002.github.io/nccinterview/static/media/cssicon.f0206779c57662ba78b7.png"></img>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </span>
          </div>
        </div>
        <div className={cx("ci")}>
          <h2>ABC</h2>
          <div className={cx("item")}>
            <img src="https://datvuhp2002.github.io/nccinterview/static/media/cssicon.f0206779c57662ba78b7.png"></img>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
