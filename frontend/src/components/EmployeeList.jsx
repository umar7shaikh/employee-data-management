import React from "react";

const EmployeeList = ({
  employees,
  onEdit,
  onDelete,
  onSort,
  sortField,
  sortDirection,
}) => {
  const renderSortArrow = (field) =>
    sortField === field ? (sortDirection === "asc" ? " ↑" : " ↓") : null;

  return (
    <table className="min-w-full border border-gray-300 mb-8">
      <thead>
        <tr>
          <th
            className="border px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => onSort("name")}
          >
            Name{renderSortArrow("name")}
          </th>
          <th
            className="border px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => onSort("email")}
          >
            Email{renderSortArrow("email")}
          </th>
          <th
            className="border px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => onSort("position")}
          >
            Position{renderSortArrow("position")}
          </th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td className="border px-4 py-2">{emp.name}</td>
            <td className="border px-4 py-2">{emp.email}</td>
            <td className="border px-4 py-2">{emp.position}</td>
            <td className="border px-4 py-2 flex space-x-2">
              <button
                className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white px-4 py-2 rounded transition font-medium"
                onClick={() => onEdit(emp)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-white px-4 py-2 rounded transition font-medium"
                onClick={() => onDelete(emp.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        {employees.length === 0 && (
          <tr>
            <td
              colSpan="4"
              className="border px-4 py-2 text-center text-gray-500"
            >
              No employees found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmployeeList;
