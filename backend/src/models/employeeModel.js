const db = require('../db/database');

const getAllEmployees = (callback) => {
  db.all('SELECT * FROM employees', [], callback);
};

const createEmployee = (employee, callback) => {
  const { name, email, position } = employee;
  db.run(
    'INSERT INTO employees (name, email, position) VALUES (?, ?, ?)',
    [name, email, position],
    function(err) {
      callback(err, { id: this.lastID, ...employee });
    }
  );
};

const updateEmployee = (id, employee, callback) => {
  const { name, email, position } = employee;
  db.run(
    'UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?',
    [name, email, position, id],
    function(err) {
      callback(err, this.changes);
    }
  );
};

const deleteEmployee = (id, callback) => {
  db.run('DELETE FROM employees WHERE id = ?', id, function(err) {
    callback(err, this.changes);
  });
};

module.exports = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
