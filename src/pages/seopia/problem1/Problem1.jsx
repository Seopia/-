import { useState } from 'react';
import No1 from './components/problem/No1';
import { useNavigate, useOutletContext } from 'react-router-dom';

function Problem1() {
    const nav = useNavigate();
    const {score,setScore} = useOutletContext();
    const [success, setSuccess] = useState(false);
    const next = () => {
        nav('/P59');
        setScore(score+2);
    }
    return (
        <div>
            <No1 setSuccess={setSuccess}/>
            {success&&<button onClick={next}>다음 문제 넘어가기</button>}
        </div>
    );
}

export default Problem1;