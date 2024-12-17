import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Choose() {
    const nav = useNavigate();
  return (
    <div style={{
        minHeight:'100vh',
        minWidth:'100vw',
        overflow:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <div style={{width:'50%', display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <button style={buttonStyles} onClick={()=>nav('/bu')}>웹 응용 프로그래밍</button>
        <button style={buttonStyles} onClick={()=>nav('/login')}>IT경진대회</button>
        </div>
    </div>
  )
}

const buttonStyles = {
    width:'30%',
    height:'10vh',
    background: 'rgb(192,216,255)',
    border:'none',
    borderRadius: '15px',
    color:'white',
    fontSize: 18,
    cursor:'pointer',
    
}
