import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/admin" Component={Admin} />
            <Route path="/user" Component={User} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
