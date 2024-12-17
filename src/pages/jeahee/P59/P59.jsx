import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./P59.css";

function P59() {
  const nav = useNavigate();
  const { score, setScore } = useOutletContext(); 
  const [inputs, setInputs] = useState({
    "5층": { facility: "", description: "" },
    "4층": { facility: "", description: "" },
    "3층": { facility: "", description: "" },
    "2층": { facility: "", description: "" },
    "1층": { facility: "", description1: "", description2: "" },
  });

  const correctAnswers = {
    "5층": { facility: "음악실", description: "음악" },
    "4층": { facility: "미술실", description: "미술" },
    "3층": { facility: "체육실", description: "체육" },
    "2층": { facility: "요리실", description: "요리" },
    "1층": { facility: "진료실&물리치료실", description1: "진료", description2: "물리치료" },
  };

  const handleInputChange = (value, floor, field) => {
    setInputs((prev) => ({
      ...prev,
      [floor]: {
        ...prev[floor],
        [field]: value,
      },
    }));


    const correct = correctAnswers[floor];
    const userInputs = {
      ...inputs[floor],
      [field]: value,
    };

    if (floor === "1층") {
      if (
        userInputs.facility.trim() === correct.facility &&
        userInputs.description1.trim() === correct.description1 &&
        userInputs.description2.trim() === correct.description2
      ) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      if (
        userInputs.facility.trim() === correct.facility &&
        userInputs.description.trim() === correct.description
      ) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  return (
    <div className="p59-main-body">
      <div>
        앞서 기억해 둔 복지관의 층별 시설입니다. 각 시설의 이름과 설명의 빈칸을 채워보세요.
      </div>

      <div>
        <table className="main-table">
          <thead>
            <tr>
              <th className="a_col">층</th>
              <th className="b_col">시설</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(inputs).map(([floor, fields], index) => (
              <tr key={index}>
                <td className="a_col">{floor}</td>
                <td>
                  <input
                    type="text"
                    className="fac_input"
                    value={fields.facility || ""}
                    onChange={(e) => handleInputChange(e.target.value, floor, "facility")}
                  />
                </td>
                <td>
                  {floor === "1층" ? (
                    <>
                      건강상담, 응급처치, 물리치료 처방 등 의사의
                      <input
                        type="text"
                        className="underline_input"
                        value={fields.description1 || ""}
                        onChange={(e) => handleInputChange(e.target.value, floor, "description1")}
                      />
                      를 받을 수 있습니다. 또한 운동치료, 전기자극치료 등
                      <input
                        type="text"
                        className="underline_input"
                        value={fields.description2 || ""}
                        onChange={(e) => handleInputChange(e.target.value, floor, "description2")}
                      />
                      서비스를 이용할 수 있습니다.
                    </>
                  ) : (
                    <>
                      {floor === "5층" && "악기연주, 노래교실, 공연관람 등 노후의 건전한 여가문화를 위한"}
                      {floor === "4층" && "그림 그리기, 서예, 공예 등 노후의 건전한 신체유지를 위한"}
                      {floor === "3층" && "탁구, 요가, 게이트볼, 스포츠댄스 등 노후의 건강한 신체유지를 위한"}
                      {floor === "2층" && "요리, 제과제빵, 바리스타(커피제조) 등 일상생활 참여 증진을 위한"}
                      <input
                        type="text"
                        className="underline_input"
                        value={fields.description || ""}
                        onChange={(e) => handleInputChange(e.target.value, floor, "description")}
                      />
                      프로그램이 진행됩니다.
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>복지관의 층별 시설을 기억해 주세요.</div>
      <button type="button" className="page_button" onClick={() => nav("/p60")}>다음 문제 넘어가기</button>
    </div>
  );
}

export default P59;