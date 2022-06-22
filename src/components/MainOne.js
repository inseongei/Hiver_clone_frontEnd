import React from "react";
import Card from './Card'
import "./MainEventAd.css";



const MainOne = () =>{

  
  
    
    return(
        <>

        <div className="Main_container">
            <nav className="Main_second_container">
                <div className="Main_TODAY"> TODAY 랭킹</div>
                <div className="Main_a">
                <a href="##" className="active brand">브랜드</a>
                <a href="##" className="active">쇼핑몰</a>
                <a href="##" className="active">럭셔리</a>
                <a href="##" className="active">스포츠</a>
                <a href="##" className="active">디지털</a>
                <a href="##" className="active">라이프</a>
                </div>
            </nav>
            <div className="Card_container">
            <Card/>
            </div>
            <div className="Main_cardBtn">
                <button> <strong>랭킹</strong> 더보기</button>
            </div>

        </div>

        </>
    )
}

export default MainOne;