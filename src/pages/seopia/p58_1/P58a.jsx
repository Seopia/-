import React from 'react';
import s from './P58a.module.css';
import NextButton from '../../components/NextButton';
function P58a() {
    return (
        <div style={{height:'100vh',marginTop:'10%'}}>
            <span className={s.title}>층별 시설 기억하기</span>
            <p>
                다음은 노인 복지관의 층별 안내도 입니다.<br/>
                각 <b style={{color:'red'}}>층별 시설</b>과 설명을 소리 내어 읽어보세요.
            </p>
                <div className={s.tableContainer}>
                <table className={s.table} width={500} border={1}>
                    <thead>
                    <tr className={s.tableTitle}>
                        <th>층</th>
                        <th>시설</th>
                        <th>설명</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>5층</th>
                        <td>음악실</td>
                        <td style={{textAlign:'left'}}>악기연주, 노래교실, 공연관람 등 노후의 건전한 여가 문화를 위한 <b>음악프로그램</b>이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <th>4층</th>
                        <td>미술실</td>
                        <td style={{textAlign:'left'}}>그림 그리기, 서예, 공예 등 노후의 건전한 여가문화를 위한<b>미술프로그램</b>이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <th>3층</th>
                        <td>체육실</td>
                        <td style={{textAlign:'left'}}>탁구, 요가, 게이트볼, 스포츠댄스 등 노후의 건강한 신체유지를 위한 <b>체육프로그램</b>이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <th>2층</th>
                        <td>요리실</td>
                        <td style={{textAlign:'left'}}>요리, 제과제빵, 바리스타(커피제조) 등 일상생활 참여 증진을 위한 <b>요리프로그램</b>이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <th>1층</th>
                        <td>진료실,물리치료실</td>
                        <td style={{textAlign:'left'}}>건강상담, 응급처치, 물리치료, 처방 등 의사의<b>진료</b>를 받을 수 있습니다.또한 운동치료, 전기자극치료 등 <b>물리치료서비스</b>를 이용할 수 있습니다.</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div><u><b style={{color:'red'}}>복지관의 층별 시설</b>을 기억해 주세요.</u></div>
                <NextButton goTo={'/p59'}/>
        </div>
    );
}

export default P58a;