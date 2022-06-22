import React from "react";
import "./MainHeader.css";
const MainHeader = () => {
  return (

    <nav className="navbar">
      <ul className="main_menu">
        <li>
          <a href="/">홈</a>
        </li>
        <li>
          <a href="/">메거진</a>
        </li>
        <li>
          <a href="/">단독</a>
        </li>
        <li>
          <a href="/">브랜드</a>
        </li>
        <li>
          <a href="/">쇼핑몰</a>
        </li>
        <li>
          <a href="/">럭셔리</a>
        </li>
        <li>
          <a href="/">스포츠</a>
        </li>
        <li>
          <a href="/">디지털</a>
        </li>
        <li>
          <a href="/">라이프</a>
        </li>
        <li>
          <a href="/">스토어</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainHeader;

