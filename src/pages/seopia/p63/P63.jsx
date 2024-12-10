import React, { useState } from 'react';
import NextButton from '../../components/NextButton';
import { useOutletContext } from 'react-router-dom';

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
        <div style={{display:'flex',height:'100vh',marginTop:'35%'}}>
            {imgs?
            <div>
            {
                imgs.map((img, k)=>{
                    
                    return(
                        <div style={{display:'flex',alignItems:'center'}} key={k}>
                            <img style={{marginBottom:20}} width={200} src={img.url}/>
                            <input type='number' value={img.input} onChange={(e)=>handleImgInputChange(e,img.number)}/>
                            <div>{img.url}층</div>
                        </div>
                    )
                })
            }
            <NextButton goTo={'/P61'} callBack={()=>{
                const countCollect = imgs.filter(item => item.isCollect).length;
                setScore(score+countCollect);
            }}/>

            </div>
            :<></>}
        </div>
    );
}

export default P63;