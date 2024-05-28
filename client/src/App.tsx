import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Admin from './pages/Admin';
import Questions from './components/Questions/Questions';
import Easy from './components/Questions/EasyQuestions';
import Medium from './components/Questions/MediumQuestions';
import Hard from './components/Questions/HardQuestions';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home/>} />
            {/* admin routes */}
            <Route path='/admin' element={<Admin/>} />
            <Route path='/admin/questions' element={<Questions/>} />
            <Route path='/admin/questions/easy' element={<Easy/>} />
            <Route path='/admin/questions/medium' element={<Medium/>} />
            <Route path='/admin/questions/hard' element={<Hard/>} />
          </Routes>
        </div>
      
      </BrowserRouter>
    </>
  )
}

