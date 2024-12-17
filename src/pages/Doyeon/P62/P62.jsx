import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./P62.css";

function P62(props) {
  const nav = useNavigate();
  const { score, setScore } = useOutletContext();

  const [no1answer, setNo1Answer] = useState({
    성주: "",
    상구: "",
    양심: "",
    정선: "",
  });

  const [no2Answer, setNo2Answer] = useState(["", ""]);
  const [no2Score, setNo2Score] = useState(false);

  const [no1score, setNo1Score] = useState({
    성주: false,
    상구: false,
    양심: false,
    정선: false,
    allCorrect: false,
  });

  const [allInputMax, setAllInputMax] = useState(false); 
  const correctNo1 = { 성주: "5", 상구: "3", 양심: "5", 정선: "4" };
  const correctNo2 = ["성주", "양심"];

  const handleInputChange = (e, name) => {
    setNo1Answer({ ...no1answer, [name]: e.target.value });
  };

  const handleNo2InputChange = (e, index) => {
    const newNo2Answer = [...no2Answer];
    newNo2Answer[index] = e.target.value.trim();
    setNo2Answer(newNo2Answer);
  };

  useEffect(() => {
    const allAnswerMax = Object.values(no1answer).every(
      (val) => val.trim() !== ""
    );
    const allNo2Filled = no2Answer.every((val) => val.trim() !== "");
    setAllInputMax(allAnswerMax && allNo2Filled);
  }, [no1answer, no2Answer]);

  useEffect(() => {
    const allCorrect = Object.keys(correctNo1).every(
      (key) => no1answer[key] === correctNo1[key]
    );

    if (allCorrect && !no1score.allCorrect) {
      setScore((prevScore) => prevScore + 1);
      setNo1Score((prev) => ({ ...prev, allCorrect: true }));
    } else if (!allCorrect && no1score.allCorrect) {
      setScore((prevScore) => prevScore - 1);
      setNo1Score((prev) => ({ ...prev, allCorrect: false }));
    }
  }, [no1answer, correctNo1, no1score, setScore]);

  useEffect(() => {
    if (!no2Score) {
      const sortedInput = [...no2Answer].sort();
      const sortedCorrect = [...correctNo2].sort();

      if (
        sortedInput.length === sortedCorrect.length &&
        sortedInput.every((val, index) => val === sortedCorrect[index])
      ) {
        setScore((prevScore) => prevScore + 1);
        setNo2Score(true);
      }
    }
  }, [no2Answer, no2Score, correctNo2, setScore]);

  const nextPage = () => {
    nav("/P63");
  };

  return (
    <div className="main_body">
      <div>
        <p>
          네 친구들이 복지관 앞 정자에서 대화를 나누고 있습니다. 앞서 기억해 둔
          <span className="red_text"> 층별 시설</span>을 생각하며 아래의 대화를
          소리 내어 읽고, 문제를 풀어보세요.(1~2)
        </p>
      </div>

      <div className="ex_box">
        <div className="ex_detail">
          성주: 어휴 날이 너무 덥다. 온몸에 힘도 없고 입맛도 없는 게 아무래도
          더위를 먹은 것 같아. 내일 사물놀이 공연을 제대로 보려면, 오늘은 의사
          선생님께 진료를 보고 집에 가서 푹 쉬어야겠어.
        </div>
        <div className="ex_detail">
          상구: 그래 성주야. 우리같이 나이든 사람들은 건강을 제일 조심해야해.
          그나저나 다들 댄스 스포츠 수업 들어봤니? 나는 이번 주 내내 듣는데,
          너무 재밌더라. 음악에 맞춰 춤 추다보면 시간 가는 줄 모르겠더라고.
        </div>
        <div className="ex_detail">
          양심: 나도 저번에 들어봤는데, 난 몸이 잘 안 움직여서 좀 힘들었어.
          그러고 보면 우리 복지관에 참 재밌는 프로그램이 많은 것 같아. 난
          오늘이랑 내일 사물놀이 공연을 관람할거야.
        </div>
        <div className="ex_detail2">
          정선: 우리 복지관에 사물놀이 공연도 오는구나. 멋지겠는 걸? 나도 다음
          번에 신청해야겠다. 나는 이번 주 내내 있을 붓글씨 수업 때 필요한 붓이랑
          화선지를 사왔어. 글씨를 쓰다보면 마음이 차분해지는 것 같아.
        </div>
      </div>

      <div className="no1">
        <div>1. 네 친구들은 오늘 각각 몇 층으로 이동할 예정인가요?</div>
        <table className="no1_table" border="1">
          <thead>
            <tr>
              <th>성주</th>
              <th>상구</th>
              <th>양심</th>
              <th>정선</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(no1answer).map((key) => (
                <td key={key}>
                  <input
                    type="text"
                    className="no1_answer"
                    value={no1answer[key]}
                    onChange={(e) => handleInputChange(e, key)}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="no2">
        <div>2. 내일 같은 층에서 만나게 될 친구 두 명은 누구인가요?</div>
        <div className="no2_input">
          <input
            type="text"
            className="no2_answer"
            value={no2Answer[0]}
            onChange={(e) => handleNo2InputChange(e, 0)}
          />
          ,{" "}
          <input
            type="text"
            className="no2_answer"
            value={no2Answer[1]}
            onChange={(e) => handleNo2InputChange(e, 1)}
          />
        </div>
      </div>

      <div className="next_page_div">
        {allInputMax && (
          <span className="correct_text">모든 칸을 채우셨어요!</span>
        )}
        {!allInputMax && (
          <span className="null_text">모든 칸을 채워주세요.</span>
        )}
        <button
          className="page_button"
          onClick={nextPage}
          type="button"
          disabled={!allInputMax}
        >
          다음 페이지
        </button>
      </div>
    </div>
  );
}

export default P62;
