import { useState } from 'react';
import No1 from './components/problem/No1';
import { useOutletContext } from 'react-router-dom';
import NextButton from '../../components/NextButton';

function P58() {
    const {score,setScore} = useOutletContext();
    const [success, setSuccess] = useState(false);
    const next = () => {
        setScore(score+2);
    }
    return (
        <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <No1 setSuccess={setSuccess}/>
            {success&&<NextButton goTo={"/p58a"} callBack={()=>next()}/>}
        </div>
    );
}

export default P58;