import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [rollNo, setRollNo] = useState("");
  const navigate = useNavigate();

  const searchStudent = () => {
    navigate(`/student/${rollNo}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎓 Student Search Portal</h1>

      <input
        type="text"
        placeholder="Enter Roll Number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <button
        onClick={searchStudent}
        style={{ padding: "10px 20px", marginLeft: "10px" }}
      >
        Search
      </button>
    </div>
  );
}

export default Home;