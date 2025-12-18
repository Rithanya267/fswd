// CourseEnrollment.jsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CourseEnrollment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Course Enrollment</h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Student Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Select Course</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded-xl"
                >
                  <option value="">-- Choose a course --</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </div>

              <Button type="submit" className="w-full rounded-2xl">
                Enroll
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Enrollment Successful 🎉</h3>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Course:</strong> {course}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


