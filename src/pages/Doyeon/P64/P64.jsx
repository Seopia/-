import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./P64.css";

function P64(props) {
  const nav = useNavigate();

  const { score, setScore } = useOutletContext();

  const [weatherSelect, setWeatherSelect] = useState("");
  const [weatherIcons, setWeatherIcons] = useState([
    { type: "sunny", url: "/p64/sunny.PNG", loaded: false },
    { type: "cloudy", url: "/p64/cloudy.PNG", loaded: false },
    { type: "rainy", url: "/p64/rainy.PNG", loaded: false },
    { type: "windy", url: "/p64/windy.PNG", loaded: false },
  ]);

  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: "",
    input12: "",
    input13: "",
    input14: "",
  });

  const [inputScored, setInputScored] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
    input5: false,
    input6: false,
    input7: false,
    input8: false,
    input9: false,
    input10: false,
    input11: false,
    input12: false,
    input13: false,
    input14: false,
  });

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  const areAllInputsFilled = Object.values(inputs).every(
    (value) => value.trim() !== ""
  );

  useEffect(() => {
    if (areAllInputsFilled) {
      setScore((prevScore) => prevScore + 1);
    }
  }, [inputs, setScore]);

  const weatherClick = (weather) => {
    setWeatherSelect(weather);
  };

  useEffect(() => {
    const preloadIcons = weatherIcons.map((icon) => {
      const img = new Image();
      img.src = icon.url;
      img.onload = () => {
        setWeatherIcons((prevIcons) =>
          prevIcons.map((prevIcon) =>
            prevIcon.type === icon.type
              ? { ...prevIcon, loaded: true }
              : prevIcon
          )
        );
      };
      return img;
    });
  }, []);

  const allInputsFilled = Object.values(inputs).every(
    (value) => value.trim() !== ""
  );

  const nextPage = () => {
    if (allInputsFilled) {
      nav("");
    }
  };

  return (
    <div className="main_body">
      <div className="diary">일기</div>
      <div className="main_date">
        <input
          type="text"
          className="date_input"
          value={inputs.input1}
          onChange={(e) => handleInputChange(e, "input1")}
        />
        년
        <input
          type="text"
          className="date_input"
          value={inputs.input2}
          onChange={(e) => handleInputChange(e, "input2")}
        />
        월
        <input
          type="text"
          className="date_input"
          value={inputs.input3}
          onChange={(e) => handleInputChange(e, "input3")}
        />
        일
        <input
          type="text"
          className="date_input"
          value={inputs.input4}
          onChange={(e) => handleInputChange(e, "input4")}
        />
        요일
        <span className="weather">날씨</span>
        {weatherIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.loaded ? icon.url : "/images/loading.png"}
            alt=""
            className={`weather_icon ${
              weatherSelect === icon.type ? "selected" : ""
            }`}
            onClick={() => weatherClick(icon.type)}
          />
        ))}
      </div>

      <table className="table_size1" border="1">
        <thead>
          <tr>
            <th colSpan="4">나의 하루</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table1_1">
              방문한
              <br />
              장소
            </td>
            <td>
              <textarea
                className="table_textArea"
                value={inputs.input5}
                onChange={(e) => handleInputChange(e, "input5")}
              ></textarea>
            </td>
            <td className="table1_3">오늘 만난 사람</td>
            <td>
              <textarea
                className="table_textArea"
                value={inputs.input6}
                onChange={(e) => handleInputChange(e, "input6")}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="table1_1">
              구입한
              <br />
              물건
            </td>
            <td>
              <textarea
                className="table_textArea"
                value={inputs.input7}
                onChange={(e) => handleInputChange(e, "input7")}
              ></textarea>
            </td>
            <td className="table1_3">지출 금액</td>
            <td>
              <textarea
                className="table_textArea"
                value={inputs.input8}
                onChange={(e) => handleInputChange(e, "input8")}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="table1_1">
              오늘의
              <br />
              뉴스
            </td>
            <td colSpan="3">
              <textarea
                className="table_textArea"
                value={inputs.input9}
                onChange={(e) => handleInputChange(e, "input9")}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table border="1" className="table_size1">
        <thead>
          <tr>
            <th className="table1_1">시각</th>
            <th colSpan="3">중요한 일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table1_1">
              오전
              <br />
              5시~8시
            </td>
            <td className="table2_2">
              일어나서
              <br />한 일
            </td>
            <td colSpan="2">
              <textarea
                className="table_textArea"
                value={inputs.input10}
                onChange={(e) => handleInputChange(e, "input10")}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="table1_1">
              오전
              <br />
              8시~12시
            </td>
            <td className="table2_2">
              아침식사
              <br />
              후에 한 일
            </td>
            <td>
              <textarea
                className="table_textArea"
                value={inputs.input11}
                onChange={(e) => handleInputChange(e, "input11")}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="table1_1">
              오후
              <br />
              12시~5시
            </td>
            <td className="table2_2">
              오후에
              <br />한 일
            </td>
            <td>
              <textarea
                className="table_textArea"
                value={inputs.input12}
                onChange={(e) => handleInputChange(e, "input12")}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="table1_1">
              오후
              <br />
              5시~10시
            </td>
            <td className="table2_2">
              저녁식사
              <br />
              후에 한 일
            </td>
            <td>
              <textarea
                className="table_textArea"
                value={inputs.input13}
                onChange={(e) => handleInputChange(e, "input13")}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table border="1" className="table_size2">
        <tbody>
          <tr>
            <td className="table3_1">내일 계획</td>
            <td>
              <textarea
                className="table_textArea"
                value={inputs.input14}
                onChange={(e) => handleInputChange(e, "input14")}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table border="1" className="table_size2">
        <tbody>
          <tr>
            <td className="table4_1">
              뇌건강을
              <br />
              위한
              <br />
              생활습관
            </td>
            <td>
              사회활동을 열심히 합시다.
              <br />
              친목단체, 스포츠클럽, 종교활동과 같은 단체활동을 하는 사람이
              치매에 걸릴 확률이 1/4로 낮습니다.
            </td>
          </tr>
        </tbody>
      </table>

      <div className="next_page_div">
        {allInputsFilled && (
          <span className="correct_text">모든 칸을 채우셨어요!</span>
        )}
        {!allInputsFilled && (
          <span className="null_text">모든 칸을 채워주세요.</span>
        )}
        <button
          className="page_button"
          onClick={nextPage}
          type="button"
          disabled={!allInputsFilled}
        >
          다음 페이지
        </button>
      </div>
    </div>
  );
}

export default P64;
