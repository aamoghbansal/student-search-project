import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import StudentProfile from "./StudentProfile.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:rollNo" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}

export default App;