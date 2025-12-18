import { useState } from "react";

export default function AttendanceTracker() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState([]);

  const markAttendance = (status) => {
    if (!name) {
      alert("Please enter student name");
      return;
    }

    const record = {
      id: Date.now(),
      name,
      status,
      date: new Date().toLocaleDateString(),
    };

    setAttendance([...attendance, record]);
    setName("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Attendance Tracker</h2>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
        />

        <div className="flex gap-3 mb-4">
          <button
            onClick={() => markAttendance("Present")}
            className="flex-1 bg-green-600 text-white py-2 rounded-xl"
          >
            Present
          </button>
          <button
            onClick={() => markAttendance("Absent")}
            className="flex-1 bg-red-600 text-white py-2 rounded-xl"
          >
            Absent
          </button>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Attendance Records</h3>
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {attendance.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border p-2 rounded-lg text-sm"
              >
                <span>{item.name}</span>
                <span>{item.status}</span>
                <span>{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
