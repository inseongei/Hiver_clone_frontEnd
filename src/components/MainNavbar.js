import React from "react";
import "./MainNavbar.css";
import user from "./images/user.png";
import shoppingcart from "./images/shoppingcart.png";
import loupe from "./images/loupe.png";
import { useNavigate } from "react-router-dom";

const MainNavbar = () => {
  // Hook 선언
  let navigate = useNavigate();

  // 로그인 체크하기 위해 로컬스토리지의 토큰을 LoginCheck에 선언
  const LoginCheck = localStorage.getItem('login-token');  


  // 로그아웃시 사용될 함수 ( 로그인토큰, 유저이메일 , 유저 닉네임을 로그아웃시 로컬스토리지에서 제거)
  const Logout = ()=>{
    localStorage.removeItem('login-token')
    localStorage.removeItem('user-name')
    localStorage.removeItem('user-nickname')
    navigate('/')
    alert('로그아웃 되셨습니다')
}



  // 메인 Navbar 화면 뷰 ( 삼항연산자 사용 로컬 스토리지의 토큰 유무를 판단하여 로그인 여부를 확인 )
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
