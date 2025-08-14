import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function AttendanceOverview() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="calendar-wrap">
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}
