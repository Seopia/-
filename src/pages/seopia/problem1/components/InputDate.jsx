import React from 'react';

function InputDate({text,set, collect}) {
    return (
        <div>
            {collect&&<div>맞았습니다!</div>}
            <div style={{display:'flex'}}>
                <input disabled={collect} onChange={(e)=>set(e.target.value,text)}/>
                <div>{text}</div>
            </div>
        </div>
    );
}

export default InputDate;