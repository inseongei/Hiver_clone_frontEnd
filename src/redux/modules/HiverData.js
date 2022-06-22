// HiverData.js   모듈 안에 있는 리듀서를 묶어서 스토어를 만드는 것
import axios from 'axios';

// Actions      --> 저장변수 = 프로젝트명 / 모듈 명 (리듀서 명) / 액션 
const GET = 'Card/GET'


// State 초기값
const initialState = {
    data:{}
};


// Action Creators      --> 액션 생성 함수
export function GetCard(CardData){
    return{type:GET,CardData}
}


// middleware --> 미들웨어 /  Payload ???????
export const GetCardAxios = () =>{
    return function (dispatch){
        axios.get('http://54.180.100.13/api/')
        .then((res)=>{
            dispatch(GetCard(res))
        }).catch((err)=>{
            console.log(err)
        })
    }
}





// Reducer
export default function HiverData(state = initialState , action= {}){
    switch (action.type){
        case 'Card/GET' : {
            return {list : action.CardData}
        }
        default: return state;
    }
} 