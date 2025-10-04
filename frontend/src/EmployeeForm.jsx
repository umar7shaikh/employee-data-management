import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSave, submitLabel, initialData, onClose }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [position, setPosition] = useState(initialData?.position || '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setPosition(initialData.position);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !position) return;
    onSave({ name, email, position });
    setName('');
    setEmail('');
    setPosition('');
  };

  return (
    <form className="mb-6 bg-gray-100 rounded p-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block mb-1 font-semibold">Name</label>
        <input
          className="w-full border rounded px-2 py-1"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 font-semibold">Email</label>
        <input
          className="w-full border rounded px-2 py-1"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 font-semibold">Position</label>
        <input
          className="w-full border rounded px-2 py-1"
          value={position}
          onChange={e => setPosition(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center mt-4">
        <button className="bg-green-600 text-white px-3 py-1 rounded mr-2" type="submit">
          {submitLabel}
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default EmployeeForm;
