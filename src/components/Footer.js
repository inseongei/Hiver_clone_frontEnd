import React from 'react';
import { IoLogoReact , IoLogoNodejs } from "react-icons/io5";


export const Footer = () => {
 return(
    <footer className='footer'>
        <strong>HIVER ν΄λ‘  μ½λ©<br/></strong>
        <div><IoLogoReact className='React'></IoLogoReact> <span className='Together'>π</span> <IoLogoNodejs className='Node'></IoLogoNodejs></div>
        <div className='makename'> FRONT-END : μ μΈμ± , νκ²° &nbsp;&nbsp; BACK-END : μ±μμ°¬ , μμ¬ν , μ΄μ¬μ</div>
    </footer>
 ) 

};

export default Footer;
