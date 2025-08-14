import { FiUsers, FiCheckSquare } from "react-icons/fi";
import { PiGraduationCapLight } from "react-icons/pi";

export default function TopCards() {
  const cards = [
    {
      title: "Total Employees",
      value: 142,
      sub: "12% from last month",
      tint: "green",
      icon: <FiUsers />,
    },
    {
      title: "Active Tasks",
      value: 87,
      sub: "3% from last week",
      tint: "red",
      icon: <FiCheckSquare />,
    },
    {
      title: "Interns",
      value: 24,
      sub: "5% from last week",
      tint: "green",
      icon: <PiGraduationCapLight />,
    },
  ];

  return (
    <div className="row g-3">
      {cards.map((c, i) => (
        <div className="col-12 col-md-4" key={i}>
          <div className="panel-white p-3 p-md-4 d-flex align-items-start justify-content-between">
            <div>
              <div className="card-title">{c.title}</div>
              <div className="card-value">{c.value}</div>
              <div className={`card-sub ${c.tint}`}>{c.sub}</div>
            </div>
            <div className="card-ico">{c.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
