import { useState } from "react";
import axios from "axios";

interface Student {
  rollNo: string;
  name: string;
  branch: string;
  year: string;
  email: string;
  phone: string;
  cgpa: number;
}

function App() {
  const [rollNo, setRollNo] = useState<string>("");
  const [student, setStudent] = useState<Student | null>(null);
  const [error, setError] = useState<string>("");

  const searchStudent = async () => {
    try {
      const res = await axios.get<Student>(
        `https://student-search-project.onrender.com/student/${rollNo}`
      );
      setStudent(res.data);
      setError("");
    } catch (err) {
      setStudent(null);
      setError("Student not found");
    }
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

      {error && <p style={{ color: "red" }}>{error}</p>}

      {student && (
        <div
          style={{
            marginTop: "30px",
            border: "1px solid gray",
            display: "inline-block",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{student.name}</h2>
          <p><strong>Roll No:</strong> {student.rollNo}</p>
          <p><strong>Branch:</strong> {student.branch}</p>
          <p><strong>Year:</strong> {student.year}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>CGPA:</strong> {student.cgpa}</p>
        </div>
      )}
    </div>
  );
}

export default App;
