import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/seopia/startpage/StartPage';
import Header from './pages/seopia/header/Header';
import Problem1 from './pages/seopia/problem1/Problem1';
import Problem2 from './pages/seopia/problem2/Problem2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/problem-1' element={<Problem1/>}/>
          <Route path='/problem-2' element={<Problem2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
