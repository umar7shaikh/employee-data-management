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
            className="border px-4 py-2 cursor-pointer"
            onClick={() => onSort("name")}
          >
            Name{renderSortArrow("name")}
          </th>
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => onSort("email")}
          >
            Email{renderSortArrow("email")}
          </th>
          <th
            className="border px-4 py-2 cursor-pointer"
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
            <td className="border px-4 py-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                onClick={() => onEdit(emp)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
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
