import React from "react";
import "./P61.css";

function P61(props) {
  return (
    <div className="main_body">
      <div>
        <p className="text_style">
          다음 만화 속 여자가 복권에 당첨되었다고 가정했을 때, 말풍선(1)에
          들어갈 말을 자유롭게 3가지 적어보세요.
        </p>
      </div>
      <div className="pic_set">
        <span>
          <img src="p61_1.PNG" alt="" className="pic_img" />
        </span>
        <span>
          <img src="p61_2.PNG" alt="" className="pic_img" />
        </span>
        <br />
        <span>
          <img src="p61_3.PNG" alt="" className="pic_img" />
        </span>
        <span>
          <img src="p61_4.PNG" alt="" className="pic_img" />
        </span>
      </div>
      <div>
        <p className="text_style">
          <span class="ex">예시)</span> 요즘 뉴스 보니까 소방관들 장갑이 많이
          낡고, 근무환경도 많이 열악하다고 해요. 불철주야 고생하는 소방관들을
          위해 기부하는 건 어때요?
        </p>
      </div>
      <div>
        <span className="question_num">1.</span>
        <input type="text" className="answer" />
        <br />
        <span className="question_num">2.</span>
        <input type="text" className="answer" />
        <br />
        <span className="question_num">3.</span>
        <input type="text" className="answer" />
        <br />
      </div>
      <div className="page_button">
        <button>이전 페이지</button>
        <button>다음 페이지</button>
      </div>
    </div>
  );
}

export default P61;
