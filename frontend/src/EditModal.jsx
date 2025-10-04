import React from 'react';
import EmployeeForm from './EmployeeForm';

const EditModal = ({ isOpen, onClose, onSave, employee }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg p-6 w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">Edit Employee</h2>
        <EmployeeForm
          onSave={onSave}
          submitLabel="Update"
          initialData={employee}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default EditModal;
