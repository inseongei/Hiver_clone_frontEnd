import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// DetailReview의 자식 컴포넌트 -> DetailReview의 데이터 props로 상속
const Comment =(props)=>{

  // useParams로 boardid 파라미터값 받아옴
  let { boardid } = useParams();

  // 로컬 스토리지에 저장 되어있는 닉네임과 로그인 토큰을 변수에 선언
  const user = localStorage.getItem("user-nickname");
  const token = localStorage.getItem("login-token");


  
  // 리뷰를 지우는 함수
  const ReviewDel = () =>{
      axios.delete('http://54.180.100.13/api/board/' + boardid + '/review/' + props.reviewid,{
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



    // Comment의 화면 뷰 ( 삼항연산자돌린것 -> 리뷰를 쓸때 nickname 값 vs 현재 로그인중엔 나의 nickname 값을 비교)
  return(
    <>
    {user === props.nickname ?   
      <dl data-v-229d511e="" className="detail_review_default">
      <dt data-v-229d511e="" className="review_profile">
        <div><button onClick={ReviewDel}>삭제</button></div>
        <span data-v-229d511e="" className="thumbss">
          <img
            data-v-229d511e=""
            src="https://image.brandi.me/user/2019/12/18/2549575945324389_1576621347_L.jpg"
            alt="77***** 프로필 이미지"
          />
        </span>
        <strong data-v-229d511e="">
          <div data-v-229d511e="" className="user_name">
            {props.nickname}
          </div>
          <span data-v-229d511e="" className="date">
          {props.date}
          </span>
        </strong>
      </dt>
      <dd data-v-229d511e="" className="review_info">
        <span data-v-229d511e="" className="user userHeight">
        {props.tall}
        </span>
      </dd>
      <dd data-v-229d511e="" className="review_text">
      {props.review}
      </dd>
      <dd data-v-229d511e="" className="review_thumb">
        <span data-v-229d511e="" className="thumbs">
          <img
            src ={props.img} alt="이미지" className="iamimage"
          />
        </span>
      </dd>
    </dl>


      :
    
      <dl data-v-229d511e="" className="detail_review_default">
      <dt data-v-229d511e="" className="review_profile">
        <span data-v-229d511e="" className="thumbss">
          <img
            data-v-229d511e=""
            src="https://image.brandi.me/user/2019/12/18/2549575945324389_1576621347_L.jpg"
            alt="77***** 프로필 이미지"
          />
        </span>
        <strong data-v-229d511e="">
          <div data-v-229d511e="" className="user_name">
            {props.nickname}
          </div>
          <span data-v-229d511e="" className="date">
          {props.date}
          </span>
        </strong>
      </dt>
      <dd data-v-229d511e="" className="review_info">
        <span data-v-229d511e="" className="user userHeight">
        {props.tall}
        </span>
      </dd>
      <dd data-v-229d511e="" className="review_text">
      {props.review}
      </dd>
      <dd data-v-229d511e="" className="review_thumb">
        <span data-v-229d511e="" className="thumbs">
          <img
            src ={props.img} alt="이미지" className="iamimage"
          />
        </span>
      </dd>
    </dl>            
    }
</>
  )
}

export default Comment;