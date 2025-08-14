import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/addEmployee.css"; 
import humanImg from "../assets/human.png";

export default function AddEmployeeModal({ show, onHide, onAddEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = () => {
    onAddEmployee({ name, email, role, department });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Body className="p-4 add-employee-modal">
        <div className="d-flex align-items-center gap-4">
          <img
            src={humanImg}
            alt="Illustration"
            style={{ width: "200px" }}
          />
          <div className="flex-grow-1">
            <h4 className="fw-bold mb-3">Add New Employee</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex gap-2 mb-3">
                <Form.Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>Select role</option>
                  <option>Developer</option>
                  <option>Designer</option>
                  <option>Manager</option>
                </Form.Select>
                <Form.Select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>Select department</option>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>HR</option>
                </Form.Select>
              </div>
              <div className="d-flex gap-2">
                <Button variant="primary" onClick={handleSubmit}>
                  Add Employee
                </Button>
                <Button variant="secondary" onClick={onHide}>
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
