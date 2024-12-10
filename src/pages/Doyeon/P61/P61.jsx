import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./P61.css";

function P61() {
  const nav = useNavigate();

  const [imgs, setImgs] = useState([
    { url: "/p61/p61_1.PNG", loaded: false },
    { url: "/p61/p61_2.PNG", loaded: false },
    { url: "/p61/p61_3.PNG", loaded: false },
    { url: "/p61/p61_4.PNG", loaded: false },
  ]);

  const [no1Answer, setNo1Answer] = useState({ Q1: "", Q2: "", Q3: "" });
  const [allInputMax, setAllInputMax] = useState(false);
  const [no1Score, setNo1Score] = useState(false); 
  const { score, setScore } = useOutletContext();

  useEffect(() => {
    imgs.forEach((img) => {
      const image = new Image();
      image.src = img.url;
      image.onload = () =>
        setImgs((prevImgs) =>
          prevImgs.map((prevImg) =>
            prevImg.url === img.url ? { ...prevImg, loaded: true } : prevImg
          )
        );
    });
  }, [imgs]);

  useEffect(() => {
    const inputsFilled = Object.values(no1Answer).every(
      (value) => value.trim() !== ""
    );
    setAllInputMax(inputsFilled);

    if (inputsFilled && !no1Score) {
      setScore((prevScore) => prevScore + 1);
      setNo1Score(true); 
    }
  }, [no1Answer, no1Score, setScore]);

  const handleInputChange = (value, key) => {
    setNo1Answer((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="main_body">
      <p className="text_style">
        다음 만화 속 여자가 복권에 당첨되었다고 가정했을 때, 말풍선(1)에 들어갈
        말을 자유롭게 3가지 적어보세요.
      </p>

      <div className="pic_set">
        {imgs.map((img, index) => (
          <img key={index} src={img.url} alt="" className="pic_img" />
        ))}
      </div>

      <p className="text_style">
        <span className="ex">예시)</span> 요즘 뉴스 보니까 소방관들 장갑이 많이
        낡고, 근무환경도 많이 열악하다고 해요. 불철주야 고생하는 소방관들을 위해
        기부하는 건 어때요?
      </p>

      {["Q1", "Q2", "Q3"].map((key, index) => (
        <div key={key}>
          <span className="question_num">{index + 1}.</span>
          <input
            type="text"
            className="answer"
            value={no1Answer[key]}
            onChange={(e) => handleInputChange(e.target.value, key)}
          />
        </div>
      ))}

<div className="next_page_div">
        {allInputMax && (
          <span className="correct_text">모든 칸을 채우셨어요!</span>
        )}
        {!allInputMax && (
          <span className="null_text">모든 칸을 채워주세요.</span>
        )}
        <button
          className="page_button"
          onClick={()=>{nav('/P62')}}
          type="button"
          disabled={!allInputMax}
        >
          다음 페이지
        </button>
      </div>
    </div>
  );
}

export default P61;
