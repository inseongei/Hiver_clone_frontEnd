import React from 'react';
import { IoLogoReact , IoLogoNodejs } from "react-icons/io5";

export const Footer = () => {
 return(
    <footer className='footer'>
        <strong>HIVER 클론 코딩<br/></strong>
        <div><IoLogoReact className='React'></IoLogoReact> <span className='Together'>🙌</span> <IoLogoNodejs className='Node'></IoLogoNodejs></div>
        <div className='makename'> FRONT-END : 정인성 , 한결 &nbsp;&nbsp; BACK-END : 채예찬 , 안재훈 , 이재석</div>
    </footer>
 ) 

};

export default Footer;
