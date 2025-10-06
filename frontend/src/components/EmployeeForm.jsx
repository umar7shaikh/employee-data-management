import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSave, submitLabel, initialData, onClose }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [position, setPosition] = useState(initialData?.position || '');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setPosition(initialData.position);
    }
  }, [initialData]);

  const validate = () => {
    const errs = {};
    if (!name) errs.name = 'Name is required';
    if (!email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email))
      errs.email = 'Invalid email format';
    if (!position) errs.position = 'Position is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({ name, email, position });
    // Optional: Clear form or keep data for editing
  };

  return (
    <form className="mb-6 bg-gray-100 rounded p-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block mb-1 font-semibold">Name</label>
        <input
          className="w-full border rounded px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-2">
        <label className="block mb-1 font-semibold">Email</label>
        <input
          className="w-full border rounded px-2 py-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-2">
        <label className="block mb-1 font-semibold">Position</label>
        <input
          className="w-full border rounded px-2 py-1"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
      </div>
      <div className="flex items-center mt-4">
        <button className="bg-green-600 text-white px-3 py-1 rounded mr-2" type="submit">{submitLabel}</button>
        {onClose && (
          <button className="bg-gray-400 text-white px-3 py-1 rounded" type="button" onClick={onClose}>Cancel</button>
        )}
      </div>
    </form>
  );
};

export default EmployeeForm;
