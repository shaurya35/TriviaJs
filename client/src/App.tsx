import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Admin from './pages/Admin';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            {/* <Route path='/' element={<Home/>} /> */}
            {/* <Route path='/admin/questions' element={<Home/>} /> */}
            {/* <Route path='/admin/questions' element={<Home/>} /> */}
            <Route path='/admin/questions' element={<Home/>} />
            <Route path='/admin' element={<Admin/>} />
          </Routes>
        </div>
      
      </BrowserRouter>
    </>
  )
}

