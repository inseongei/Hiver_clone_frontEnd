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

const Main = () => {
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(GetCardAxios());
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

