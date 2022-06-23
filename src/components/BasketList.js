import React from "react";
import axios from 'axios';








const BasketList = () =>{

    const [Basket,setBasket] = React.useState([])


    React.useEffect(()=>{
        const token = localStorage.getItem("login-token");
        axios.get('http://54.180.100.13/api/cart',{
            headers: { Authorization: "Bearer " + `${token}` }
        })
        .then((res)=>{
            console.log(res)
            setBasket(res.data.cartList)
        })
    },[])

    console.log(Basket)




    return(
        <>
        {Basket.map((Basket,index)=>{
            return(
                <div key={index}>
                <div className='Basket_first_box'>
    
                <div className='Basket_second_box'> 
    
                <div className='Basket_img'> <img src={Basket.image1} alt ="이미지"/></div>
                <div className='Basket_five_box'>
                <div className='Basket_detail'>
                    <div className='Basket_brand'><strong>{Basket.enterprise} </strong></div>
                    <div className='Basket_title2'>{Basket.title}</div>
                    <div className='Basket_price'><p className='Basket_discount'>{Basket.discountper}</p> <p>{Basket.price}원</p> <p className='Basket_own'><del>{Basket.price}</del></p></div>
                </div>
                </div>
            </div>
    
    
    <div className='Basket_third_box'>
        <div>
            <div className='Basket_option'>
                <p>{Basket.option} </p>
            </div>
            <div className='Basket_six_container'>
                <div className='Basket_button'>
                    <button className='minus'></button>
                    <div>1</div>
                    <button className='plus'></button>
                </div>
                <div> {Basket.price}</div>
            </div>
        </div>
    </div>
    
    <div className='Basket_four_box'>
        <div> <span className="delbtn">X</span></div>
        <span>{Basket.price}원</span>
        <div className='Basket_div_button'><button>주문하기</button></div>
    </div>
    
    
    </div>
    
    </div>
            )
        })}

</>
)
    }
export default BasketList;

