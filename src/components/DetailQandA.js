import "./DetailQandA.css";

function DetailQandA() {
  return (
    <div>
      <nav>
        <div class="detail_tab">
          <div class="tab_default">상품정보</div>
          <div class="tab_default">
            리뷰
            <span>1,604</span>
          </div>
          <div class="tab_default tab_active">
            Q&amp;A
            <span>651</span>
          </div>
          <div class="tab_default">주문정보</div>
        </div>
      </nav>

      <div id="info_container_2" class="detail_info_container">
        <div className="qna_chk">
          <div>
            Q&A <span>24</span>
          </div>
          <a id="btn_write_qna">문의내용작성하기</a>
          <span className="lbl">내가 쓴 글 보기</span>
          <span classname="list_chk">
            <img />
          </span>
        </div>
        <div class="page_nav">
          <a href>
            <img />
          </a>
          <a href>
            <img />
          </a>
          <a href>
            <img />
          </a>
          <a href>
            <img />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailQandA;
