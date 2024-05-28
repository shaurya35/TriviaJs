import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages and components
import Home from './pages/Home';
import Admin from './pages/Admin';
import Questions from './pages/Questions';
import Easy from './pages/EasyQuestions';
import Medium from './pages/MediumQuestions';
import Hard from './pages/HardQuestions';
import NotFound from './pages/NotFound';
import Profiles from './pages/Profiles';
import User from './pages/User';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home/>} />
            {/* admin routes */}
            <Route path='/admin' element={<Admin/>} />
            <Route path='/admin/all-profiles' element={<Profiles/>} />
            <Route path='/admin/questions' element={<Questions/>} />
            <Route path='/admin/questions/easy' element={<Easy/>} />
            <Route path='/admin/questions/medium' element={<Medium/>} />
            <Route path='/admin/questions/hard' element={<Hard/>} />
            {/* user routes */}
            <Route path='/user' element={<User/>} />

            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      
      </BrowserRouter>
    </>
  )
}





// src/
//   components/
//     Navbar.tsx
//     QuestionForm.tsx
//     QuestionList.tsx
//     ProfileList.tsx
//   pages/
//     AdminPanel.tsx
//     Leaderboard.tsx
//     Profiles.tsx
//     Questions.tsx
//     EasyQuestions.tsx
//     MediumQuestions.tsx
//     HardQuestions.tsx
//   App.tsx
//   index.tsx

// Components
// Navbar: For navigation links.
// QuestionForm: For adding or editing questions (CRUD operations).
// QuestionList: To display a list of questions.
// ProfileList: To display user profiles.
// Pages
// AdminPanel: Main admin page with links to other admin functionalities.
// Leaderboard: Displays leaderboard.
// Profiles: Displays all user profiles.
// Questions: Main questions page with links to easy, medium, and hard questions.
// EasyQuestions, MediumQuestions, HardQuestions: Display respective difficulty level questions.


