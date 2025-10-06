import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import EditModal from '../components/EditModal';

const apiBase = 'http://localhost:5000/api/employees';

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Fetch all employees from backend
  const loadEmployees = () => {
    fetch(apiBase)
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(() => toast.error("Failed to load employees"));
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // Search and sort logic
  useEffect(() => {
    let filtered = employees.filter(
      emp =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.position.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortField) {
      filtered.sort((a, b) => {
        const aVal = a[sortField]?.toLowerCase() || '';
        const bVal = b[sortField]?.toLowerCase() || '';
        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    setFilteredEmployees(filtered);
  }, [searchTerm, employees, sortField, sortDirection]);

  // Table sort handler
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Add employee handler with notification
  const handleAdd = async (employee) => {
    try {
      await fetch(apiBase, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });
      toast.success("Employee added");
      loadEmployees();
    } catch {
      toast.error("Failed to add employee");
    }
  };

  // Edit employee (open modal)
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setEditModalOpen(true);
  };

  // Update employee handler with notification
  const handleUpdate = async (updatedData) => {
    try {
      await fetch(`${apiBase}/${editingEmployee.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      toast.success("Employee updated");
      setEditModalOpen(false);
      setEditingEmployee(null);
      loadEmployees();
    } catch {
      toast.error("Failed to update employee");
    }
  };

  // Delete employee handler with notification
  const handleDelete = async (id) => {
    try {
      await fetch(`${apiBase}/${id}`, { method: 'DELETE' });
      toast.success("Employee deleted");
      loadEmployees();
    } catch {
      toast.error("Failed to delete employee");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <h1 className="text-3xl font-bold mb-8">Employee Management</h1>
      
      <input
        type="text"
        placeholder="Search by name or position"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <EmployeeForm onSave={handleAdd} submitLabel="Add Employee" />

      <EmployeeList
        employees={filteredEmployees}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSort={handleSort}
        sortField={sortField}
        sortDirection={sortDirection}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleUpdate}
        employee={editingEmployee}
      />
    </div>
  );
}

export default EmployeePage;
