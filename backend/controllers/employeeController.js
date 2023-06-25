const { con } = require('../model/db');

const getEmployeesData = async (req, res) => {
    try {
        const data = `SELECT * FROM employee`;
        await con.query(data, (err, employees) => {
            if (err) {
                return res.status(400).json(err.sqlMessage)
            }
            res.status(200).json({
                success: true,
                employees,
            })
        })
    } catch (err) {
        res.send({ status: 400, err: err.sqlMessage })
    }
}

const getEmployee = async (req, res) => {
    try {
        const data = req.params.id;
        const SqlQuery = `SELECT * FROM employee WHERE empid = ${data}`;
        await con.query(SqlQuery, (err, result) => {
            console.log(result, 'result')
            if (err) {
                return res.status(400).json(err.sqlMessage)
            }
            if (result.length === 0) {
                return res.status(404).json({ message: "Employee not found" });
            }
            const employee = result[0];
            console.log(employee, 'employee')
            res.status(200).json({
                success: true,
                employee,
            })
        })
    } catch (err) {
        res.send({ status: 400, err: err.sqlMessage })
    }
}

const createEmployee = async (req, res) => {
    try {
        const data = req.body;
        const SqlQuery = `INSERT INTO employee SET ?`;
        await con.query(SqlQuery, data, (err, employee) => {
            if (err) {
                return res.send({ status: 400, err: err.sqlMessage })
            }
            res.status(201).json({
                success: true,
                employee,
            })
        })
    }
    catch (err) {
        res.send({ status: 400, err: err.sqlMessage })
    }
}

const updateEmployee = async (req, res) => {
    try {
        const data = [req.body, req.params.id];
        const SqlQuery = `UPDATE employee SET ? WHERE empid = ?`;
        await con.query(SqlQuery, data, (err, employees) => {
            if (err) {
                return res.send({ status: 400, err: err.sqlMessage })
            }
            res.status(200).json({
                success: true,
                employees
            })
        })
    }
    catch (err) {
        res.send({ status: 400, err: err.sqlMessage })
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const data = req.params.id;
        const SqlQuery = `DELETE FROM employee WHERE empid = ?`;
        await con.query(SqlQuery, data, (err, employee) => {
            if (err) {
                return res.send({ status: 400, err: err.sqlMessage })
            }
            res.status(200).json({
                success: true,
                employee
            })
        })
    }
    catch (err) {
        res.send({ status: 400, err: err.sqlMessage })
    }
}

module.exports = { getEmployeesData, getEmployee, createEmployee, updateEmployee, deleteEmployee }