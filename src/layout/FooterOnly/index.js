import React from "react";
import Header from "~/components/Header";
const FooterOnly = ({ children }) => {
  return (
    <div>
      <Header isPublicRoute={true} />
      <div className="body my-5">{children}</div>
    </div>
  );
};

export default FooterOnly;
