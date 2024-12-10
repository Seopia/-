import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/seopia/startpage/StartPage';
import Header from './pages/seopia/header/Header';
import './detail.css';
import P63 from './pages/seopia/p63/P63';
import Result from './pages/seopia/resultpage/Result';
import P58 from './pages/seopia/p58/P58';
import P58a from './pages/seopia/p58_1/P58a';

import P61 from './pages/Doyeon/P61/P61';
import P62 from './pages/Doyeon/P62/P62';
import P64 from './pages/Doyeon/P64/P64';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/p58' element={<P58/>}/>
          <Route path='/p58a' element={<P58a/>}/>
          <Route path='/P61' element={<P61/>}/>
          <Route path='/P62' element={<P62/>}/>
          <Route path='/p63' element={<P63/>}/>
          <Route path='/P64' element={<P64/>}/>
          <Route path='/result' element={<Result/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
