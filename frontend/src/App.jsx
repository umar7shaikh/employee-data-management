import React, { useEffect, useState } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import EditModal from './EditModal';

const apiBase = 'http://localhost:5000/api/employees';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Fetch employees
  const loadEmployees = () => {
    fetch(apiBase)
      .then(res => res.json())
      .then(data => setEmployees(data));
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // Add employee
  const handleAdd = (employee) => {
    fetch(apiBase, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee)
    })
      .then(res => res.json())
      .then(() => loadEmployees());
  };

  // Edit
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setEditModalOpen(true);
  };

  // Update
  const handleUpdate = (updatedData) => {
    fetch(`${apiBase}/${editingEmployee.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(() => {
        setEditModalOpen(false);
        setEditingEmployee(null);
        loadEmployees();
      });
  };

  // Delete
  const handleDelete = (id) => {
    fetch(`${apiBase}/${id}`, { method: 'DELETE' })
      .then(() => loadEmployees());
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Employee Management</h1>
      <EmployeeForm onSave={handleAdd} submitLabel="Add Employee" />
      <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleUpdate}
        employee={editingEmployee}
      />
    </div>
  );
}

export default App;
