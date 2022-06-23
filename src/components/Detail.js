import React from "react";
import MainEventAd from "./MainEventAd";
import MainHeader from "./MainHeader";
import MainNavbar from "./MainNavbar";
import axios from 'axios';
import { useParams } from "react-router-dom";
import DetailReview from './DetailReview'
import Modal from 'react-modal'



const Detail = () =>{
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const[data,setdata]  = React.useState([])
    const count_ref = React.useRef(null)
    const price_ref = React.useRef(null)

    let { boardid } = useParams();  // useParams 어떤 원리로 가져오는걸까
    React.useEffect(()=>{
        axios.get('http://54.180.100.13/api/board/' + boardid)
        .then((res)=>{
            console.log(res)
           setdata(res.data.existboards[0])
        })
    },[])

    console.log(data)  


        const orderBaskettwo = () =>{
            if(price_ref.current.value != 'S' && price_ref.current.value != 'M' && price_ref.current.value != 'L'){
                alert('옵션에 맞게 입력해주세요 S / M / L')
            } else{
                orderBasket()
            }
        }




        const orderBasket = () =>{


            const token = localStorage.getItem("login-token");
            let orderData={
                "quantity" : count_ref.current.value,
                "option" : price_ref.current.value
            }
            axios.post('http://54.180.100.13/api/board/' + boardid + '/cart',orderData,{
                headers: { Authorization: "Bearer " + `${token}` },
            })
            .then((res)=>{
                alert(res.data.result)
            })
            .catch((err)=>{
                alert(err.response.data.msg)
            })
            setModalIsOpen(false)
        }











    return(
        <>
        <MainEventAd/>
        <MainNavbar/>
        <MainHeader/>
        <div className="Detail_container">
            <div></div>
            <div className="Detail_Box">
                <div className="Detail_imgBox">
                <img src={data.image1}alt="사진"/>
                </div>
            </div>
            <div className="Detail_TEXTbox">
            <table width={'100%'} height={'50%'}>
            <thead>
                <tr>
                    <th colSpan="3" className="Detail_brand">{data.enterprise}</th>
                </tr>

                <tr>
                    <th colSpan="3" className="Detail_title">{data.title}</th>
                    
                </tr>
                    
                <tr>
                    <th colSpan={2} className="Detail_discount">
                        <span className="Det_dis">{data.discountper} </span>
                        <span className="Det_pri"> {data.price}원 </span>  
                    </th>
                    <th className="aigreigj"><button >쿠폰</button></th>
                </tr>

                </thead>
                </table>




                



                <div className="Detail_h2">

                    <h2>최종 예상 구매가</h2>
                    <h2 className="h2_price">{data.price}원</h2>
                </div>







                <table width={'100%'} height={'50%'}>
                    <thead>

                <tr>
                    <th className="Detail_sub_title">적립금</th>
                    <th>빠른페이👉 결제시 1%적립 </th>
                </tr>

                <tr>
                    <th className="Detail_sub_title">배송</th>
                    <th>하이버는 모든 상품 무료배송!</th>
                </tr>

                <tr>
                    <th className="Detail_sub_title">리뷰정보</th>
                    <th>52개 리뷰보기</th>
                </tr>

                <tr>
                    <th className="Detail_sub_title">정품인증</th>
                    <th>하이버 모든 상품은 100% 정품입니다.</th>
                </tr>

                </thead>
            </table>

            <table width={'100%'} height ={'10%'}>
            <thead>

            <tr>
                <th><button className="bas_btn" onClick={()=>{setModalIsOpen(true)}}>장바구니</button></th>
                <th><button className="bas_buy">바로구매</button></th>
            </tr>

            </thead>
            </table>



            </div>
        </div>
        <DetailReview/>


        <Modal className="Modal_container" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div>
            <h1 className="Modal_detail"> 옵션 수량 선택하기</h1>
            <div className="Modal_BasketList">
            <input type="text" placeholder="수량(1~10개)" ref={count_ref}/>
            <input type="text"placeholder="옵션 ( S / M / L )" ref={price_ref}/>
            <button className ="modalAdd" onClick={orderBaskettwo}>주문하기</button>
        </div>
        </div>
      </Modal>
        </>
    )
}

export default Detail;