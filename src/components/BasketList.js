import React from "react";
import axios from 'axios';


// props : Basket 컴포넌트에 자식 컴포넌트로 넘겨준 데이터 값 ( Basket의 53번째 줄 )
const BasketList = (props) =>{

    // 로컬스토리지에 있는 저장된 login-token을 token 변수에 선언
    const token = localStorage.getItem("login-token");


    // 버튼 onclick 시 사용되는 삭제 함수 ( with axios.delete )
    const BasketDel = () =>{  
        axios.delete('http://54.180.100.13/api' + '/cart/' + props.cartid + '/delete',{
        headers: { Authorization: "Bearer " + `${token}` }
      })
       .then((res)=>{
          console.log(res)
          alert('삭제성공')
          window.location.reload()
        })
        .catch((err)=>{
          console.log(err)
        })
       }










    // BasketList의 화면 뷰 (장바구니안에 있는 상품의 뷰)
    return(
        <div>
        <div className='Basket_first_box'>

        <div className='Basket_second_box'> 

        <div className='Basket_img'> <img src={props.image1} alt ="이미지"/></div>
        <div className='Basket_five_box'>
        <div className='Basket_detail'>
            <div className='Basket_brand'><strong>{props.enterprise} </strong></div>
            <div className='Basket_title2'>{props.title}</div>
            <div className='Basket_price'><p className='Basket_discount'>{props.discountper}</p> <p>{props.price}원</p> <p className='Basket_own'><del>{props.price}</del></p></div>
        </div>
        </div>
    </div>


<div className='Basket_third_box'>
<div>
    <div className='Basket_option'>
        <p>{props.option} </p>
    </div>
    <div className='Basket_six_container'>
        <div className='Basket_button'>
            <button className='minus'></button>
            <div>1</div>
            <button className='plus'></button>
        </div>
        <div> {props.price}</div>
    </div>
</div>
</div>

<div className='Basket_four_box'>
<div> <span className="delbtn" onClick={BasketDel}>X</span></div>
<span>{props.price}원</span>
<div className='Basket_div_button'><button>주문하기</button></div>
</div>


</div>

</div>
)
    }
export default BasketList;

