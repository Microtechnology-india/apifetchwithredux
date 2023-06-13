const express = require('express')

const employeeRoute = express.Router();

const { getEmployeesData, getEmployee, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

employeeRoute.route('/employee').get(getEmployeesData).post(createEmployee);
employeeRoute.route('/employee/:id').put(updateEmployee).delete(deleteEmployee).get(getEmployee)

module.exports = { employeeRoute }