import React from "react";
import "./MainNavbar.css";
import user from "./images/user.png";
import shoppingcart from "./images/shoppingcart.png";
import loupe from "./images/loupe.png";
import { useNavigate } from "react-router-dom";

const MainNavbar = () => {
  let navigate = useNavigate();
  const LoginCheck = localStorage.getItem('login-token');  

  const Logout = ()=>{
    localStorage.removeItem('login-token')
    localStorage.removeItem('user-name')
    localStorage.removeItem('user-nickname')
    navigate('/')
    alert('로그아웃 되셨습니다')
}




  return (
    <>
    {! LoginCheck ?   
      <nav className="nav">
    <a className="home" href="/">
      <span>
        <img
          src="https://www.hiver.co.kr/static/22.05.01/images/header/ic-hiver-symbollogo-xl.svg"
          alt="nav_main"
          className="nav_main"
        />
      </span>
    </a>

    <ul>
      <span>
        <a href="/">
          <input className="search" type="search" aria-label="Search" />
        </a>
      </span>

      <li>
        <span>
          <a href="/">
            {/**검색기능 구현해야됨 */}
            <img src={loupe} alt="검색" className="loupe" />
          </a>
        </span>
      </li>

      <li className="active">
        <span>
          <a className="login" href="/Basket">
            <img src={shoppingcart} alt="쇼핑카드" />
          </a>
        </span>
      </li>
      <li>
        <span>
          <a className="login" href="/login">
            <img src={user} alt="로그인" />
            <img src="https://www.hiver.co.kr/static/22.05.01/images/header/ic-off.svg" alt="check" className="check"/>
          </a>
        </span>
      </li>
    </ul>
  </nav>

:
<nav className="nav">
<a className="home" href="/">
  <span>
    <img
      src="https://www.hiver.co.kr/static/22.05.01/images/header/ic-hiver-symbollogo-xl.svg"
      alt="nav_main"
      className="nav_main"
    />
  </span>
</a>

<ul>
  <span>
    <a href="/">
      <input className="search" type="search" aria-label="Search" />
    </a>
  </span>

  <li>
    <span>
      <a href="/">
        {/**검색기능 구현해야됨 */}
        <img src={loupe} alt="검색" className="loupe" />
      </a>
    </span>
  </li>

  <li className="active">
    <span>
      <a className="login" href="/Basket">
        <img src={shoppingcart} alt="쇼핑카드" />
      </a>
    </span>
  </li>
  <li>
    <span>
      <div className="login"  onClick={Logout}>
        <img src={user} alt="로그인" />
        <img src="https://www.hiver.co.kr/static/22.05.01/images/header/ic-on.svg" alt="check" className="check"/>
      </div>
    </span>
  </li>
</ul>
</nav>
}
</>

  );
};

export default MainNavbar;
