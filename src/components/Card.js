import React from "react";
import {useSelector} from "react-redux";
import { useDispatch} from "react-redux"
import {GetCardAxios} from '../redux/modules/HiverData'
import { useNavigate } from "react-router-dom";


const Card = () =>{
    // Hook 사용 선언
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // 페이지가 로드될때 리덕스에 있는 GetCardAxios를 디스패치 ( 액션을 변경해줌으로써 리덕스 미들웨어 실행 )
    React.useEffect(()=>{
        dispatch(GetCardAxios());
      },[])


    // 리덕스 스토어에 있는 값 불러오기 
    const CardData = useSelector((state)=> state.HiverData.list);




  
    // Card 의 화면 뷰
    return(
        <>
        {CardData&&CardData.data.boards.map((CardData,index)=>{
            return(   
                <div key={index} className="Card_img" onClick={()=>{
                    navigate('/Detail/' + CardData.boardid)
                }}>
                    <img src={CardData.image1} alt="사진 이미지"/>
                <div className="Card_position">
                <div className="Card_brand"> {CardData.enterprise}</div>
                <div className="Card_title">{CardData.title}</div>
                <div className="Card_sale"><strong>{CardData.discountper}</strong> <span>{CardData.price}원</span></div>
                </div>
                </div>
            )
        })}
        </>

    )
}

export default Card;

