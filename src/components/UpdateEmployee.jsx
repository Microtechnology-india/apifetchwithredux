import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Modal, Button, Row, Col } from 'react-bootstrap';
import { clearErors, getEmployeeDetails, updateEmployee } from '../actions/employeeActions';
import { UPDATE_EMPLOYEE_RESET } from '../constants/employeeContants';

const UpdateEmployee = () => {
  const { id } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { employee, error } = useSelector((state) => state.employee)
  const { isUpdated } = useSelector((state) => state.employee)

  const [show, setShow] = useState(false);

  const employeeId = id

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [empname, setEmpName] = useState('')
  const [city, setCity] = useState('')
  const [salary, setSalary] = useState('')

  useEffect(() => {
    if (employee && employee.empid !== employeeId) {
      dispatch(getEmployeeDetails(employeeId))
    } else {
      setEmpName(employee.empname)
      setCity(employee.city)
      setSalary(employee.salary)
    }
    if (error) {
      alert(error)
      dispatch(clearErors())
    }
    if (isUpdated) {
      alert("Employee Updated successfully")
      navigate('/view')
      dispatch({ type: UPDATE_EMPLOYEE_RESET })
    }
  }, [dispatch, error, navigate, isUpdated, employeeId, employee])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('empname', empname);
    formData.set('city', city);
    formData.set('salary', salary);

    dispatch(updateEmployee(employeeId, formData))
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmpName">
              <Form.Label column sm="2">
                Emp_Name:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter emp_name" name="empname" onChange={(e) => setEmpName(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextcity">
              <Form.Label column sm="2">
                City:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter City" name="city" onChange={(e) => setCity(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextSalary">
              <Form.Label column sm="2">
                Salary:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter Salary" name="salary" onChange={(e) => setSalary(e.target.value)} />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UpdateEmployee