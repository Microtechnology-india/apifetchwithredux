import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee, clearErors, deleteEmployee } from '../actions/employeeActions';
import { Button, Table } from 'react-bootstrap';
import AddEmployee from './AddEmployee';
import { DELETE_EMPLOYEE_RESET } from '../constants/employeeContants';
import { } from '../actions/employeeActions';

const ViewEmployee = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { error, employees } = useSelector((state) => state.employees);

    const { isDeleted } = useSelector((state) => state.employees);

    const deleteEmployeeHandler = (empid) => {
        dispatch(deleteEmployee(empid))
    }

    useEffect(() => {
        if (error) {
            alert("error")
        }
        if (error) {
            alert(error)
            dispatch(clearErors())
        }
        if (isDeleted) {
            alert("Data deleted successfully")
            navigate('/view')
            dispatch({ type: DELETE_EMPLOYEE_RESET })
        }

        dispatch(getEmployee())
    }, [dispatch, error, isDeleted, navigate])


    return (
        <div className='p-5'>
            <Button type='button'><AddEmployee /></Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Employee Name</th>
                        <th>City</th>
                        <th>Salary</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.empid}</td>
                                <td>{item.empname}</td>
                                <td>{item.city}</td>
                                <td>{item.salary}</td>
                                <td><Button variant="primary"><Link to={`/edit/${item.empid}`}>Edit</Link></Button></td>
                                <td><Button variant="danger" onClick={() => deleteEmployeeHandler(item.empid)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ViewEmployee