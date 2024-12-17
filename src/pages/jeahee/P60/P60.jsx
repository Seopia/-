import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./P60.css";

function P60() {
  const nav = useNavigate();
  const { score, setScore } = useOutletContext(); 


  const [inputs, setInputs] = useState({ Q1: ["", "", "", "", ""], Q2: ["", "", "", "", ""], Q3: ["", ""] });
  const [inputScored, setInputScored] = useState({ Q1: false, Q2: false, Q3: false });


  const correctAnswers = {
    Q1: ["28", "37", "11", "45", "8"].sort(),
    Q2: ["지아", "서준", "가은", "서연", "시우"].sort(),
    Q3: ["가은", "서연"].sort(),
  };


  const handleInputChange = (value, key, index) => {
    setInputs((prev) => {
      const newValues = [...prev[key]];
      newValues[index] = value;
      return { ...prev, [key]: newValues };
    });
  };


  useEffect(() => {
    Object.keys(correctAnswers).forEach((key) => {
      if (!inputScored[key] && inputs[key].every((val) => val.trim() !== "")) {
        const sortedInput = [...inputs[key]].sort();
        if (JSON.stringify(sortedInput) === JSON.stringify(correctAnswers[key])) {
          setInputScored((prev) => ({ ...prev, [key]: true }));
          setScore((prevScore) => prevScore + 1);
        }
      }
    });
  }, [inputs, inputScored, setScore]);

  return (
    <div className="mains-body" style={{marginTop:'10%'}}>
      <div>
        기쁨마을에서 5명의 복권 당첨자가 나왔습니다. 당첨번호와 순위, 당첨자를
        확인하고 문제를 풀어보세요(1~3)
      </div>

      <table className="main-table" border="1">
        <tr>
          <th>순위</th>
          <th>당첨금액</th>
          <th>당첨기준</th>
        </tr>
        <tr>
          <td>1등</td>
          <td className="right-align">1,000,000,000원</td>
          <td>당첨번호 6개 숫자 일치</td>
        </tr>
        <tr>
          <td>2등</td>
          <td className="right-align">35,000,000원</td>
          <td>당첨번호 5개 숫자 일치</td>
        </tr>
        <tr>
          <td>3등</td>
          <td className="right-align">1,260,000원</td>
          <td>당첨번호 4개 숫자 일치</td>
        </tr>
        <tr>
          <td>4등</td>
          <td className="right-align">50,000원</td>
          <td>당첨번호 3개 숫자 일치</td>
        </tr>
        <tr>
          <td>5등</td>
          <td className="right-align">5,000원</td>
          <td>당첨번호 2개 숫자 일치</td>
        </tr>
      </table>

      <table border="1" className="lotto-table">
        <th colspan="6">당첨번호</th>
        <tr>
          <td>8</td>
          <td>45</td>
          <td>11</td>
          <td>26</td>
          <td>37</td>
          <td>28</td>
        </tr>
      </table>

      <table className="lotto-table" border="1">
        <th>이름</th>
        <th colspan="7">복권번호</th>

        <tr>
          <td>가은</td>
          <td>28</td>
          <td>30</td>
          <td>11</td>
          <td>26</td>
          <td>37</td>
          <td>5</td>
        </tr>
        <tr>
          <td>시우</td>
          <td>37</td>
          <td>11</td>
          <td>1</td>
          <td>31</td>
          <td>48</td>
          <td>16</td>
        </tr>
        <tr>
          <td>서연</td>
          <td>45</td>
          <td>28</td>
          <td>18</td>
          <td>6</td>
          <td>11</td>
          <td>10</td>
        </tr>
        <tr>
          <td>서준</td>
          <td>28</td>
          <td>37</td>
          <td>11</td>
          <td>29</td>
          <td>45</td>
          <td>8</td>
        </tr>
        <tr>
          <td>지아</td>
          <td>26</td>
          <td>45</td>
          <td>28</td>
          <td>37</td>
          <td>8</td>
          <td>11</td>
        </tr>
      </table>

      <div>
        1. 서준 씨의 복권번호와 당첨번호를 비교했을 때, 5개의 숫자가 일치하여
        2등에 당첨되었습니다. 일치하는 숫자를 적어보세요
      </div>
      <div className="num1-1">
        {inputs.Q1.map((value, index) => (
          <>
            <input
              key={`Q1-${index}`}
              type="text"
              className="num1"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, "Q1", index)}
            />
            {index < inputs.Q1.length - 1 && <span>,</span>}
          </>
        ))}
      </div>

      <div>2. 1등부터 5등까지 당첨된 사람의 이름을 순서대로 나열하세요.</div>
      <div className="num1-1">
        {inputs.Q2.map((value, index) => (
          <>
            <input
              key={`Q2-${index}`}
              type="text"
              className="num1"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, "Q2", index)}
            />
            {index < inputs.Q2.length - 1 && <span> {"->"} </span>}
          </>
        ))}
      </div>

      <div>
        3. 당첨자 2명의 금액을 합했더니 1,310,000원이 되었습니다. 당첨자 2명은
        누구인가요?
      </div>
      <div className="num1-1">
        {inputs.Q3.map((value, index) => (
          <>
            <input
              key={`Q3-${index}`}
              type="text"
              className="num1"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, "Q3", index)}
            />
            {index < inputs.Q3.length - 1 && <span>,</span>}
          </>
        ))}
      </div>

      <button type="button" className="page_button" onClick={() => nav("/p61")}>다음 문제 넘어가기</button>
    </div>
  );
}

export default P60;