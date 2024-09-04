import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "~/components/Chart";
import requestApi from "~/utils/api";
import styles from "./Dashboard.module.scss";
import classNames from "classnames/bind";
import formatPrice from "~/utils/formatPrice";

const cx = classNames.bind(styles);

const Dashboard = () => {
  return <div className="container px-4 my-5">Dashboard</div>;
};

export default Dashboard;
