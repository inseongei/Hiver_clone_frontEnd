import React from "react";
import {useSelector} from "react-redux";
import { useDispatch} from "react-redux"
import {GetCardAxios} from '../redux/modules/HiverData'
import { useNavigate } from "react-router-dom";


const Card = () =>{
    React.useEffect(()=>{
        dispatch(GetCardAxios());
      },[])

    const CardData = useSelector((state)=> state.HiverData.list);

    const navigate = useNavigate();
    const dispatch = useDispatch();


  

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

