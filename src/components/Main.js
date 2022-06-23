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
import {useSelector} from "react-redux";
import { useDispatch} from "react-redux"
import {GetCardAxios} from '../redux/modules/HiverData'
import axios from "axios";

const Main = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("login-token");
  React.useEffect(()=>{
    dispatch(GetCardAxios());

    axios.get('http://54.180.100.13/api/user/signin/me',{
      headers: { Authorization: "Bearer " + `${token}` }
  })
    .then((res)=>{

      console.log(res.data.user.nickname)
      localStorage.setItem('user-nickname',res.data.user.nickname)
    })




  },[])

  const CardData = useSelector((state)=> state.HiverData.list);



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

