import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Student {
  rollNo: string;
  name: string;
  branch: string;
  year: string;
  email: string;
  phone: string;
  cgpa: number;
  qrCode?: string;
}

function StudentProfile() {
  const { rollNo } = useParams();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get<Student>(
          `https://student-search-project.onrender.com/student/${rollNo}`
        );
        setStudent(res.data);
      } catch (err) {
        setStudent(null);
      }
    };

    fetchStudent();
  }, [rollNo]);

  if (!student) return <h2 style={{ textAlign: "center" }}>Student not found</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{student.name}</h1>
      <p>Roll No: {student.rollNo}</p>
      <p>Branch: {student.branch}</p>
      <p>Year: {student.year}</p>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>CGPA: {student.cgpa}</p>
    </div>
  );
}

export default StudentProfile;