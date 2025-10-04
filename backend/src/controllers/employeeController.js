const employeeModel = require("../models/employeeModel");

const getEmployees = (req, res) => {
  employeeModel.getAllEmployees((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

const addEmployee = (req, res) => {
  const { name, email, position } = req.body;
  if (!name || !email || !position) {
    return res.status(400).json({ error: "All fields are required" });
  }
  employeeModel.createEmployee({ name, email, position }, (err, employee) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(employee);
  });
};

const updateEmployee = (req, res) => {
  const id = req.params.id;
  const { name, email, position } = req.body;
  employeeModel.updateEmployee(
    id,
    { name, email, position },
    (err, changes) => {
      if (err) return res.status(500).json({ error: err.message });
      if (changes === 0)
        return res.status(404).json({ error: "Employee not found" });
      res.json({ id, name, email, position });
    }
  );
};

const deleteEmployee = (req, res) => {
  const id = req.params.id;
  employeeModel.deleteEmployee(id, (err, changes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (changes === 0)
      return res.status(404).json({ error: "Employee not found" });
    res.json({ message: "Employee deleted" });
  });
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
