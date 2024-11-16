
import React from 'react'
import s from './Startpage.module.css';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';

function StartPage() {
  const nav = useNavigate();
  const location = useLocation();
  const {msg} = location.state || {};
  const {setStartQuiz} = useOutletContext();
  return (
    <div className={s.startPageContainer}>
        {msg?<div>{msg}</div>:<div>문제를 풀어보세요!</div>}
        <button onClick={()=>{
          nav('/');
          setStartQuiz(true);
        }}>Start Quiz</button>
    </div>
  )
}

export default StartPage