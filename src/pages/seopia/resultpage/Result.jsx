import React from 'react';
import s from './Result.module.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
function Result() {
    const {score} = useOutletContext();
    const nav = useNavigate();
    return (
        <div className={s.container}>
            <div className={s.resultContainer}>
                <div>🎉 점수는 : <b>{score}점 🎉</b></div>
                <button onClick={()=>{nav('/')}}>돌아가기</button>
            </div>
        </div>
    );
}

export default Result;