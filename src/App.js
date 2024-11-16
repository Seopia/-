import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/seopia/startpage/StartPage';
import Header from './pages/seopia/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>
          <Route path='/' element={<StartPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
