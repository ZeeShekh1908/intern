import React, { useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EmployeeListPage() {
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, { ...employee, status: "Active" }]);
  };

  return (
    <div className="p-4">
   
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary">Employees</h3>
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            + Add an employee
          </Button>
          <Form.Control
            type="text"
            placeholder="Search employees"
            style={{ width: "200px" }}
          />
          <Form.Select style={{ width: "160px" }}>
            <option>Sort by: Newest</option>
            <option>Sort by: Oldest</option>
          </Form.Select>
          <Button variant="outline-primary">Export</Button>
        </div>
      </div>

      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
              <td>{emp.department}</td>
              <td>
                <span
                  className={`badge ${
                    emp.status === "Active" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {emp.status}
                </span>
              </td>
              <td>
                <Button variant="outline-secondary" size="sm" className="me-2">
                  ✏️
                </Button>
                <Button variant="outline-danger" size="sm">
                  🗑️
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddEmployeeModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onAddEmployee={handleAddEmployee}
      />
    </div>
  );
}
