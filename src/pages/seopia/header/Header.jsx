
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import s from './Header.module.css';

function Header() {
    const nav = useNavigate();
    const url = useLocation();
    const [startQuiz, setStartQuiz] = useState(false);
    const [score, setScore] = useState(0);
    
    useEffect(()=>{
      if(url.pathname==='/'){
        setStartQuiz(false);
        setScore(0);
      }
    },[url])
    // const [time,setTime] = useState(600);
    // useEffect(() => {
    //     if (startQuiz) {
    //       const timer = setInterval(() => {
    //         setTime((prevTime) => {
    //           if (prevTime <= 1) {
    //             clearInterval(timer);
    //             nav('/',{state:{msg:"제한시간이 끝났습니다."}});
    //             setTime(600);
    //             setStartQuiz(false);
    //             return 0;
    //           }
    //           return prevTime - 1;
    //         });
    //       }, 1000);
    //       return () => {clearInterval(timer);};
    //     }
    //   }, [startQuiz, nav]);
    return (
        <>
            <div className={s.headerContainer}>
                <div onClick={()=>nav('/')} className={s.titleContainer}>
                    <img src='/title-icon.png' alt='Error' width={70} height={70}/>
                    <h1>Quiz</h1>
                </div>
                { startQuiz?
                <div className={s.timeContainer}>
                    {/* <div>남은 시간 : {time}초</div> */}
                    <div>현재 점수 : {score}</div>
                </div>
                :<></>}
            </div>
            {/* <div className={s.ghostHeader}></div> */}
            <div className={s.buRoot}>
            <Outlet context={{setStartQuiz,score,setScore}}/>
            </div>
        </>
    )
}

export default Header