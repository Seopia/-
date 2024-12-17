
import { useEffect, useState } from 'react';
import s from './Startpage.module.css';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';

function StartPage() {
  const nav = useNavigate();
  const location = useLocation();
  const { score, setScore } = useOutletContext();
  const {msg} = location.state || {};
  const {setStartQuiz} = useOutletContext();
  const [account, setAccount] = useState({id: '',pw: '',}); 
  const login = () => {
    if(account.id==='user'&&account.pw==='user'){
      nav('/p58');
      setStartQuiz(true);
    } else {
      return;
    }
  }
  useEffect(()=>{
    setScore(0);
  },[])
  const handleAccountChange = (e,k) => {
    setAccount({...account,[k]:e.target.value});
  }
  return (
    <div className={s.startPageContainer}>
        {msg?<div>{msg}</div>:<div>문제 풀기</div>}
        <div className={s.loginContainer}>
          <span>Login</span>
          <input placeholder='ID' value={account.id} onChange={(e)=>handleAccountChange(e,'id')}/>
          <input type='password' placeholder='PW' value={account.pw} 
            onKeyDown={(k)=>k.code==='Enter'&&login()} 
            onChange={(e)=>handleAccountChange(e,'pw')}
          />
          <button onClick={login}>Quiz Start</button>
        </div>
    </div>
  )
}

export default StartPage