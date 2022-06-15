import React from "react";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import ThemeContext from "../context/ThemeContext";
import Header from "./Header/header";
  
const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
  </>
);

export default Layout;
