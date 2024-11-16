
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import s from './Header.module.css';

function Header() {
    const nav = useNavigate();
    const [time,setTime] = useState(600);
    const [startQuiz, setStartQuiz] = useState(false);

    useEffect(() => {
        if (startQuiz) {
          const timer = setInterval(() => {
            setTime((prevTime) => {
              if (prevTime <= 1) {
                clearInterval(timer);
                nav('/',{state:{msg:"제한시간이 끝났습니다."}});
                setTime(600);
                setStartQuiz(false);
                return 0;
              }
              return prevTime - 1;
            });
          }, 1000);
          return () => {clearInterval(timer);};
        }
      }, [startQuiz, nav]);
    return (
        <>
            <div className={s.headerContainer}>
                <div onClick={()=>nav('/')} className={s.titleContainer}>
                    <img src='/title-icon.png' alt='Error' width={70} height={70}/>
                    <h1>Quiz</h1>
                </div>
                <div className={s.timeContainer}>
                    <div>Left time: {time}s</div>
                </div>
            </div>
            <Outlet context={{setStartQuiz}}/>
        </>
    )
}

export default Header