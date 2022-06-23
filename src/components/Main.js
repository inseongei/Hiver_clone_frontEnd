import React from "react";
import MainEventAd from "./MainEventAd";
import "./MainEventAd.css";
import MainNavbar from "./MainNavbar";
import MainOne from "./MainOne";
import MainTwo from "./MainTwo";
import MainAd from "./MainAd";
import Footer from "./Footer";
import MainCard from "./MainCard";
import MainHeader from "./MainHeader";
import { useDispatch} from "react-redux"
import {GetCardAxios} from '../redux/modules/HiverData'
import axios from "axios";

const Main = () => {
  // Hook 사용선언
  const dispatch = useDispatch();
  // 로컬스토리지에 저장되어있는 login-token을 token 이라는 변수에 선언
  const token = localStorage.getItem("login-token");

  // 페이지가 로드될때 미들웨어에 있는 GetCardAxios 디스패치 + axios.get
  React.useEffect(()=>{
    dispatch(GetCardAxios());

    axios.get('http://54.180.100.13/api/user/signin/me',{
      headers: { Authorization: "Bearer " + `${token}` }
  })
    .then((res)=>{
      localStorage.setItem('user-nickname',res.data.user.nickname)
    })




  },[])

  // 메인관련 컴포넌트들 선언
  return (
    <>
      <MainEventAd />
      <MainNavbar />
      <MainHeader />
      <MainCard />
      <MainOne />
      <MainTwo />
      <MainAd />
      <Footer />
    </>
  );
};

export default Main;

