import React, { useState } from 'react';
import NextButton from '../../components/NextButton';
import { useOutletContext } from 'react-router-dom';
import s from './P63.module.css';
/*
*
*/
function P63() {
    const {score,setScore} = useOutletContext();
    let imageArr = [];
    for (let i=1;i<=5;i++) {
        imageArr.push({url:`/p63/${i}.png`, number:i, isCollect: false, input:''});
    }
    
    const randomImages = imageArr.sort(() => Math.random() - 0.5);
    const [imgs, setImgs] = useState(randomImages);

    const handleImgInputChange = (e,result) => {
        let userInput = e.target.value;
        setImgs((prevs)=> 
            prevs.map((prev)=>{
                return prev.number == result ? 
                {...prev,input:userInput, isCollect: result==userInput?true:false} : prev
            })
            
        )
    }
    return (
        <div style={{display:'flex',height:'100vh',marginTop:'10%', flexDirection:'column'}}>
            <div className={s.prob}>2. 앞서 기억해 둔 <b>복지관의 층별 시설</b>과 시설을 대표하는 그림을 알맞게 연결해보세요.</div>
            {imgs?
            <div>
            {
                imgs.map((img, k)=>{
                    
                    return(
                        <div style={{display:'flex',alignItems:'center'}} key={k}>
                            <img style={{marginBottom:20, borderRadius:10}} width={200} src={img.url}/>
                            <input className={s.input} type='number' value={img.input} onChange={(e)=>handleImgInputChange(e,img.number)}/>
                            {/* <div>{img.url}층</div> */}
                            <div>층</div>
                        </div>
                    )
                })
            }
            <NextButton goTo={'/P64'} callBack={()=>{
                const countCollect = imgs.filter(item => item.isCollect).length;
                setScore(score+countCollect);
            }}/>

            </div>
            :<></>}
        </div>
    );
}

export default P63;