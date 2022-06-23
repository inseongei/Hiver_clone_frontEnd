import "./DetailReview.css";
import React from "react";
import {useSelector} from "react-redux";
import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal'
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from '../components/Comment'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../components/firebase'


function DetailReview() {

  const [imageSrc, setImageSrc] = React.useState("");
  let { boardid } = useParams();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [reviewID,setreviewID] = React.useState()
  const [review,setreview] = React.useState([])


  React.useEffect(()=>{
    axios.get('http://54.180.100.13/api/board/' + boardid + '/review')
    .then((res)=>{
      console.log(res)
      setreviewID(res.data.reviews)
      setreview(res.data.reviews)
    })
  },[])

  console.log(reviewID)


  const review_ref = React.useRef()
  const tall_ref = React.useRef()
  const option_ref = React.useRef()
  const fileInput = React.useRef(null);
  const CardData = useSelector((state)=> state.HiverData.list);

const navigate = useNavigate();
const dispatch = useDispatch();

const token = localStorage.getItem("login-token");





  // 이미지 미리보기 코드
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const fileName = (e) => {
    encodeFileToBase64(e.target.files[0]);
  }





// 파이어 베이스 URL 뽑아오는 코드
const imageFileFB = async () => {
  // fileInput.current.files 파일 접근할 때
  const upload_file = await uploadBytes(
    ref(storage, `images/${fileInput.current.files[0].name}`),
    fileInput.current.files[0]
  );
  console.log(upload_file); // ref 값을 가져옴

  const file_url = await getDownloadURL(upload_file.ref);
  console.log(file_url);
  fileInput.current = { url: file_url };


  // 리뷰등록 데이터값
  const ReviewData = {
    review : review_ref.current.value,
    tall :  tall_ref.current.value,
    option : option_ref.current.value,
    img :   fileInput.current?.url
                                                                         
  }
  axios.post('http://54.180.100.13/api/board/' + boardid + '/review',ReviewData,{headers: { Authorization: "Bearer " + `${token}`}})
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
  setModalIsOpen(false)












  }






















  return (
    <>
    <div>
      <nav>
        <div className="detail_tab">
          <div className="tab_default">상품정보</div>
          <div className="tab_default tab_active">
            리뷰
            <span></span>
          </div>
          <div className="tab_default" onClick={()=>{
                    navigate('/DetailTwo')
                }}>
            Q&amp;A
            <span></span>
          </div>
          <div className="tab_default">주문정보</div>
        </div>
      </nav>

      <div id="info_container_2" className="detail_info_container">
        <ul className="detail_review_select">
          <button onClick={()=>{setModalIsOpen(true)}}>리뷰작성</button>

        </ul>
      </div>
      <div>
        <h3>
          사진리뷰 <span>684</span>
        </h3>
      </div>
      


      { reviewID && reviewID.map((list, idx) => (
                
        <Comment
          key={idx}
          img = {list.img}
          boardid = {list.boardid}
          date={list.date}
          nickname={list.nickname}
          review={list.review}    
          reviewid={list.reviewid}
          tall={list.tall}
          _id={list._id}

        />
          ))} 

    </div>












<Modal className="Modal_container" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="Review_one">
          <div className="review_one_box">{imageSrc && <img className="img" src={imageSrc} alt="사진 나오지롱" />} </div>
          <div className="review_two_box"> <input type="file" onChange={fileName} ref={fileInput} /></div>
          </div>
        <div className="Review_two">
          <input type="text" placeholder="리뷰" ref={review_ref}/>
          <input type="text" placeholder="키" ref={tall_ref} />
          <input type="text" placeholder="옵션(S / M / L)" ref={option_ref}/>
          <button onClick={imageFileFB}> 등록하기</button>
        </div>
</Modal>
















</>
  );
}
Modal.setAppElement('#root')
export default DetailReview;
