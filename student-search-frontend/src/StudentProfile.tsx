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
}

function StudentProfile() {
  const { rollNo } = useParams<{ rollNo: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!rollNo) return; // prevent undefined call

    const fetchStudent = async () => {
      try {
        const res = await axios.get<Student>(
          `https://student-search-project.onrender.com/student/${rollNo}`
        );
        setStudent(res.data);
      } catch (err) {
        setStudent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [rollNo]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  if (!student)
    return <h2 style={{ textAlign: "center" }}>Student not found</h2>;

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