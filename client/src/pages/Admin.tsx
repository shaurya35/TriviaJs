// import { Routes, Route, useMatch } from "react-router-dom";
// import AdminPanel from "../components/AdminPanel";
// import Profiles from "../components/Profiles";
// import Questions from "../components/Questions/Questions";
// import EasyQuestions from "../components/Questions/EasyQuestions";
// import MediumQuestions from "../components/Questions/MediumQuestions";
// import HardQuestions from "../components/Questions/HardQuestions";
// import Leaderboard from "../components/Leaderboard";

// export default function Admin() {
//   const match = useMatch("/admin/*");

//   return (
//     <Routes>
//       <Route path="/admin" element={<AdminPanel />} />

//       <Route
//         path={`${match?.pattern?.path}/all-profiles`}
//         element={<Profiles />}
//       />
//       <Route
//         path={`${match?.pattern?.path}/leaderboard`}
//         element={<Leaderboard />}
//       />
//       <Route
//         path={`${match?.pattern?.path}/questions`}
//         element={<Questions />}
//       />
//       <Route
//         path={`${match?.pattern?.path}/questions/easy`}
//         element={<EasyQuestions />}
//       />
//       <Route
//         path={`${match?.pattern?.path}/questions/medium`}
//         element={<MediumQuestions />}
//       />
//       <Route
//         path={`${match?.pattern?.path}/questions/hard`}
//         element={<HardQuestions />}
//       />
//     </Routes>
//   );
// }

export default function Admin() {
  return (
    <div>
      admin panel here 
    </div>
  )
}
