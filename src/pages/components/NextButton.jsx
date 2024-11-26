import React from 'react';
import { useNavigate } from 'react-router-dom';

function NextButton(props) {
    const nav = useNavigate();
    const callback = () => {
        if(props.callBack){
            props.callBack();
        }
    }
    return (
        <button style={{
                background:'#A78C7B',
                border:'none',
                width:150,
                height:30,
                color:'white',
                cursor:'pointer',
                borderRadius:10,
                marginTop:30
        }} onClick={()=>{callback();nav(props.goTo);}}>다음 문제 넘어가기</button>
    );
}

export default NextButton;