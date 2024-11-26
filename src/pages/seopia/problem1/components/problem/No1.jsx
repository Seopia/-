import React, { useEffect, useState } from 'react';
import InputDate from '../InputDate';

function No1({setSuccess}) {
    const today = new Date();
    const [collect, setCollect] = useState({
        year: false,
        month: false,
        date: false,
    })
    const [result1, setResult1] = useState({
        년: '',
        월: '',
        일: '',
    });
    const handleResult1 = (value,key) => {        
        setResult1({
            ...result1,
            [key]: value,
        });
    };
    useEffect(()=>{ 
        setCollect({
            ...collect,
            year: result1.년 == today.getFullYear(),
            month: result1.월 == today.getMonth() + 1,
            date: result1.일 == today.getDate(),
          });
    },[result1]);
    useEffect(()=>{
        collect.year&&collect.month&&collect.date&&result1.날씨&&setSuccess(true);
    },[collect])
    return (
        <div>
            <div>오늘의 날짜를 적고, 날씨에 동그라미 하세요.</div>
            <div style={{display:'flex'}}>
                <InputDate text="년" set={handleResult1} collect={collect.year}/>
                <InputDate text="월" set={handleResult1} collect={collect.month}/>
                <InputDate text="일" set={handleResult1} collect={collect.date}/>
                <InputDate text="날씨" set={handleResult1}/>
            </div>
        </div>
    );
}

export default No1;