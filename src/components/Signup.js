import axios from "axios";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const Signup = () => {



    // 회원가입 4개 input ref로 요소잡음
    const id_ref = React.useRef(null)
    const pw_ref = React.useRef(null)
    const pwcheck_ref = React.useRef(null)
    const nick_ref = React.useRef(null)


    const SignupAxios = () =>{

        // 회원가입 데이터
        const SignupData = {
        "useremail" : id_ref.current.value,
        "nickname" : nick_ref.current.value,
        "password" : pw_ref.current.value,
        "checkpassword" : pwcheck_ref.current.value
    }

        axios.post('http://54.180.100.13/api/user/signup',SignupData)
        .then((res)=>{
            alert(res.data.message)
        })
        .catch((err)=>{
            alert(err.response.data.errorMessage)
        })
    }





    return(

 

        <div className="Login_wrap">
             <div id="Login_container">
 
            <nav className="Signup_nav">
                 <div>
                    <BsChevronLeft className="icon_size"></BsChevronLeft>
                </div> 
                <h1 className="Signup">
                    회원가입
                </h1>
            </nav>

            <div className="Login_input">
            <p>아이디</p>
            <input type="text" placeholder="아이디 입력" ref={id_ref}></input>
            <p>닉네임</p>
            <input type="text" placeholder="닉네임 입력" ref={nick_ref}></input>
            <p>패스워드</p>
            <input type="password" placeholder="패스워드 입력" ref={pw_ref}></input>
            <p>패스워드 확인</p>
            <input type="password" placeholder="패스워드 확인" ref={pwcheck_ref}></input>
            <button className="Signup_button" onClick={SignupAxios}><span> 회원가입</span></button>
            </div>




            </div>
        </div>
  );
};

export default Signup;
