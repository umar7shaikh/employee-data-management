# Employee Data Management

## Overview
Employee Data Management is a full-stack web application for managing employee information with functionalities to create, read, update, and delete employee data. The frontend is built with React and Tailwind CSS for a responsive and user-friendly interface, while the backend is powered by Node.js, Express, and a database for handling API requests.

## Features
- View a list of employees
- Add new employee details via a form
- Edit existing employee data using an intuitive modal
- Delete employees from the list
- Input validation and error handling
- API testing with automated tests included

## Technologies Used
### Frontend
- React: Component-based UI library
- Tailwind CSS: Utility-first CSS framework for styling
- Vite: Development server and build tool

### Backend
- Node.js: JavaScript runtime environment
- Express: Web framework for API routing
- Database (e.g., SQLite, PostgreSQL) for data persistence
- Jest or similar framework for testing backend API

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Database setup (if applicable)

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/umar7shaikh/employee-data-management.git
    cd employee-data-management
    ```

2. Install backend dependencies and start backend server:
    ```
    cd backend
    npm install
    npm start
    ```

3. Install frontend dependencies and start frontend server:
    ```
    cd frontend
    npm install
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) (or the port your Vite server uses) to view the app.

## File Structure

| Folder/File Name            | Description                                  | Location                         |
|------------------------------|----------------------------------------------|----------------------------------|
| **/backend**                 | Backend server files                         | Root directory                   |
| server.js                    | Sets up the Express server                   | /backend                         |
| employeeRoutes.js            | API routes for employee CRUD operations      | /backend                         |
| employeeController.js        | Controller logic for employees               | /backend                         |
| employeeModel.js             | Employee data schema                         | /backend                         |
| database.js                  | Database connection setup                    | /backend                         |
| errorHandler.js              | Error handling middleware                    | /backend                         |
| employees.test.js            | Backend API test cases                        | /backend                         |
| **/frontend**                | Frontend React app files                     | Root directory                   |
| main.jsx                     | React app entry point                        | /frontend                        |
| App.jsx                      | Root component                               | /frontend                        |
| EmployeePage.jsx             | Main employee display page                   | /frontend                        |
| EmployeeList.jsx             | List component for employees                 | /frontend                        |
| EmployeeForm.jsx             | Form to add/edit employee                    | /frontend                        |
| EditModal.jsx                | Modal for editing employee data              | /frontend                        |
| index.css                    | Global styles                                | /frontend                        |
| start.js                     | (Optional start script)                      | /frontend                        |




## Usage

- To add an employee, click the "Add Employee" button, fill in the form, and submit.
- To edit an employee, click the "Edit" button next to the employee entry, modify data in the modal, and save.
- To delete, click the "Delete" button.
- All changes persist in the backend database.

## Testing

- Backend API tests can be run using:
npm test

text
- The tests cover basic CRUD API functionality for employees.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request. Ensure code adheres to existing style and passes tests.

## License

This project is open-source and free to use.