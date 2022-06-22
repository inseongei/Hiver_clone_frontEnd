import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comment =(props)=>{
    console.log(props)
    let { boardid } = useParams();

    const token = localStorage.getItem("login-token");
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









            return(
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
            )
}

export default Comment;