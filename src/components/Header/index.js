import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { privateRoutes } from "~/Route/Routes";
import Button from "~/components/Button";
import Logo from "~/public/assets/images/logo.png";
import Image from "~/components/Image";
import requestApi from "~/utils/api";
import Menu from "../Popper/Menu";
import { onHandleLogout } from "~/helpers";
import Search from "../Search";
const cx = classNames.bind(styles);
const Header = ({ isPublicRoute = false, navigator = "/" }) => {
  const [userData, setUserData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("./");
  };
  const Menu_item = [
    [{ title: "Trang cá nhân", path: `/info/${userData.username}` }],
    [{ title: "Khoá học của tôi", path: "/my-courses" }],
    [
      { title: "Bài viết đã lưu", path: "/saved-posts" },
      { title: "Bài viết của bạn", path: "/my-posts" },
    ],
    [{ title: "Luyện tập lập trình", path: "/practice-programming" }],
    [{ title: "Cài đặt", path: `/setting` }],
    [{ title: "Đăng xuất", onClick: onHandleLogout, path: "/login" }],
  ];
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  useEffect(() => {
    try {
      requestApi("/users/detail", "GET")
        .then((res) => {
          console.log("DATA", res.data);
          setUserData({
            ...res.data.data,
            avatar: `${res.data.data.avatar}`,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className={cx("wrapper")}>
      {isPublicRoute ? (
        <div
          className={cx(
            "content",
            "d-flex align-items-center justify-content-between container h-100"
          )}
        >
          <Button
            header
            className={cx(
              "logo",
              "h-100 d-flex align-items-center justify-content-start"
            )}
            to={`${navigator}`}
          >
            <div
              className={cx("logo-components", "d-flex align-items-center  ")}
            >
              <Image logo src={Logo}></Image>
              <h5 className={cx("", "mx-2 text-dark opacity-100 bold fs-2")}>
                Tantandihoc
              </h5>
            </div>
          </Button>
        </div>
      ) : (
        <div
          className={cx(
            "content",
            "d-flex align-items-center justify-content-between container h-100"
          )}
        >
          {/* logo */}
          <div className={cx("logo", "d-flex")}>
            <Button
              header
              className={cx("logo", "h-100 justify-content-start")}
              to={`${navigator}`}
            >
              <div
                className={cx(
                  "logo-components",
                  "d-flex align-items-center justify-content-center"
                )}
              >
                <Image logo src={Logo}></Image>
                <h5
                  className={cx(
                    "web-name",
                    "mx-2 text-dark opacity-100 bold fs-2"
                  )}
                >
                  Tantandihoc
                </h5>
              </div>
            </Button>
          </div>
          {/* search */}
          <Search />
          {/* action */}
          <div className={cx("action", "d-flex justify-content-end")}>
            <Menu items={Menu_item}>
              {userData.avatar ? (
                <Image avatar rounded alt="" src={userData.avatar} />
              ) : (
                <Image avatar rounded alt="" src={Logo} />
              )}
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
