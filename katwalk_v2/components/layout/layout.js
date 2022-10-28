import React from "react";
import Footer from "./footer/footer";
import Navigation from "./navigation/navigation";

const Layout = ({ children, footer }) => {
  return (
    <>
      {footer == "none" ? (
        <>
          <Navigation />
          {children}
        </>
      ) : (
        <>
          <Navigation />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
