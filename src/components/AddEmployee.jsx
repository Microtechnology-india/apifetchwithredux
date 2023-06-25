import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import { createEmployee, getEmployee } from '../actions/employeeActions';

const AddEmployee = () => {
    const dispatch = useDispatch();

    const [empinfo, setEmpinfo] = useState({
        empid: '',
        empname: '',
        city: '',
        salary: '',
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpinfo({ ...empinfo, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const myForm = new FormData()
        myForm.set('empid', empinfo.empid)
        myForm.set('empname', empinfo.empname)
        myForm.set('city', empinfo.city)
        myForm.set('salary', empinfo.salary)

        dispatch(createEmployee(myForm))
        handleClose();
        dispatch(getEmployee())
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextId">
                            <Form.Label column sm="2">
                                EmpId:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' placeholder='Enter emp-id' name="empid" onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmpName">
                            <Form.Label column sm="2">
                                Emp_Name:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter emp_name" name="empname" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextcity">
                            <Form.Label column sm="2">
                                City:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter City" name="city" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextSalary">
                            <Form.Label column sm="2">
                                Salary:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter Salary" name="salary" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddEmployee