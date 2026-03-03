import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StudentProfile from "./StudentProfile";

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