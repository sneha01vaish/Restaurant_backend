import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './employee.module.css';

const EmployeeSection = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ username: '', email: '', phone: '', role: 'employee' });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/restaurant/employees', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEmployees(response.data.employees);
      } catch (error) {
        console.log('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  const handleAddEmployee = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/restaurant/employee', newEmployee, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setEmployees([...employees, response.data.employee]);
      setNewEmployee({ username: '', email: '', phone: '', role: 'employee' }); // Clear inputs
    } catch (error) {
      console.log('Error adding employee:', error);
    }
  };

  const handleRemoveEmployee = async (employeeId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8000/api/restaurant/employee/${employeeId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setEmployees(employees.filter((employee) => employee._id !== employeeId));
    } catch (error) {
      console.log('Error removing employee:', error);
    }
  };

  return (
    <div className={style.employeeContainer}>
      <h2>Employees</h2>
      <div className={style.addEmployeeContainer}>
        <input
          type="text"
          placeholder="Employee Name"
          value={newEmployee.username}
          onChange={(e) => setNewEmployee({ ...newEmployee, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Employee Email"
          value={newEmployee.email}
          onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Employee Phone"
          value={newEmployee.phone}
          onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>

      <ul className={style.employeeList}>
        {employees.map((employee) => (
          <li key={employee._id} className={style.employeeItem}>
            <p>{employee.username}</p>
            <button onClick={() => handleRemoveEmployee(employee._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeSection;
