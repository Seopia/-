import React, { useState } from 'react';

function InputDate({text,set, collect}) {
    const [isCollect, setIsCollect] = useState(collect);
    return (
        <div>
            <div style={{display:'flex',marginRight:10,alignItems:'center',gap:2}}>
                <input className='input-date' style={{
                    border:'none',
                    borderRadius:10,
                    height:30,
                    paddingLeft:10,
                    width:50
                }} disabled={collect} onChange={(e)=>set(e.target.value,text)} value={isCollect?'맞았습니다.':undefined}/>
                <div style={{
                    
                }}>{text}</div>
            </div>
            {collect&&<div style={{color:'green',marginTop:20}}>맞았습니다!</div>}
        </div>
    );
}

export default InputDate;