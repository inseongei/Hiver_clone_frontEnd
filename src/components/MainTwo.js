import React from "react";
import Card from './Card'


const MainTwo = () =>{
    return(
        <div className="Main_container">
        <nav className="Main_second_container">
            <div className="Main_TODAY"> 신상 모아보기</div>
            <div className="Main_b">
            <a href="##" className="active">브랜드</a>
            <a href="##" className="active">쇼핑몰</a>
            <a href="##" className="active">럭셔리</a>
            <a href="##" className="active">스포츠</a>
            <a href="##" className="active">디지털</a>
            <a href="##" className="active">라이프</a>
            </div>
        </nav>


        {/* 메인 2번째의 카드 8개 만들기  */}
        <div className="Card_container">
 
                <div className="Card_img"><img src ="https://image.brandi.me/cproduct/2022/06/20/SB000000000065576057_1655730498_image1_S.jpeg" alt="안경"/>
                <div className="Card_position">
                <div className="Card_brand">근원</div>
                <div className="Card_title">남녀 얼굴형에 맞는 시티보이룩</div>
                <div className="Card_sale"><strong>32%</strong> <span>15,000</span></div>
                </div>
                </div>

            <div className="Card_container">
 
                <div className="Card_img"><img src ="https://image.brandi.me/cproduct/2022/06/20/SB000000000065576032_1655730495_image1_S.jpeg" alt="셔츠"/>
                <div className="Card_position">
                <div className="Card_brand">평마</div>
                <div className="Card_title">시어서커 스트라이프 셔츠</div>
                <div className="Card_sale"><strong>41%</strong> <span>29,500</span></div>
                </div>
                </div>
            </div>

            <div className="Card_container">
 
            <div className="Card_img"><img src ="https://image.brandi.me/cproduct/2022/06/20/SB000000000065575804_1655730405_image1_S.jpeg" alt="바지"/>
                <div className="Card_position">
                <div className="Card_brand">평마</div>
                <div className="Card_title">시어서커 스트라이프 셔츠</div>
                <div className="Card_sale"><strong>41%</strong> <span>29,500</span></div>
                </div>
                </div>
            </div>

            <div className="Card_container">
 
            <div className="Card_img"><img src ="https://image.brandi.me/cproduct/2022/06/20/SB000000000065575731_1655730382_image1_S.jpeg" alt="바지"/>
                <div className="Card_position">
                <div className="Card_brand">션타운</div>
                <div className="Card_title">린넨 밴딩 와이드 슬랙스</div>
                <div className="Card_sale"><strong>10%</strong> <span>36,000</span></div>
                </div>
                </div>
            </div>

            <div className="Card_container">
 
            <div className="Card_img"><img src ="https://image.brandi.me/cproduct/2022/06/20/SB000000000065586504_1655735453_image1_S.jpeg" alt="반팔티"/>
                <div className="Card_position">
                <div className="Card_brand">반즈</div>
                <div className="Card_title">컬러 스티커 프린팅 티셔츠</div>
                <div className="Card_sale"><strong>40%</strong> <span>39,000</span></div>
                </div>
                </div>
            </div>

            <div className="Card_container">
 
            <div className="Card_img"><img src ="https://image.brandi.me/cproduct/2022/05/26/SB000000000026885097_1653556214_image1_S.jpeg" alt="반팔티"/>
                <div className="Card_position">
                <div className="Card_brand">맨즈셀렉터</div>
                <div className="Card_title">남자 카고 여름 밴딩 반바지</div>
                <div className="Card_sale"><strong>40%</strong> <span>39,000</span></div>
                </div>
                </div>
            </div>

            <div className="Card_container">
 
            <div className="Card_img"><img src ="https://image.brandi.me/cproduct/2022/05/26/SB000000000026885097_1653556214_image1_S.jpeg" alt="반팔티"/>
                <div className="Card_position">
                <div className="Card_brand">맨즈셀렉터</div>
                <div className="Card_title">남자 카고 여름 밴딩 반바지</div>
                <div className="Card_sale"><strong>40%</strong> <span>39,000</span></div>
                </div>
                </div>
            </div>

            <div className="Card_container">
 
            <div className="Card_img"><img src ="https://image.brandi.me/cproduct/2021/06/14/SB000000000025981925_1623691971_image1_S.jpeg" alt="반팔티"/>
                <div className="Card_position">
                <div className="Card_brand">주포유</div>
                <div className="Card_title">여름 시원한 어깨깡패 머슬핏</div>
                <div className="Card_sale"><strong>14%</strong> <span>29,900</span></div>
                </div>
                </div>
            </div>

        </div>

        

        
        <div className="Main_cardBtn2">
            <button> <strong>쇼핑몰 신상</strong> 더보기</button>
        </div>

    </div>
    )
}

export default MainTwo;

