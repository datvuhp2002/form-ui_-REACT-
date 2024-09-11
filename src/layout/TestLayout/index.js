import React from "react";
import Header from "~/components/Header";
import SidebarTest from "~/components/SidebarTest";
const TestLayout = ({ children }) => {
  return (
    <div>
      <SidebarTest />
      <div className="body my-5">{children}</div>
    </div>
  );
};

export default TestLayout;
