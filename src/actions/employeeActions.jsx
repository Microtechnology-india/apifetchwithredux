import axios from "axios";
import {
    ALL_EMPLOYEE_FAIL,
    ALL_EMPLOYEE_REQUEST,
    ALL_EMPLOYEE_SUCCESS,
    CLEAR_ERRORS,
    DELETE_EMPLOYEE_FAIL,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    EMPLOYEE_DETAILS_FAIL,
    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS,
    NEW_EMPLOYEE_FAIL,
    NEW_EMPLOYEE_REQUEST,
    NEW_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAIL,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS
} from "../constants/employeeContants";


// get all employee
export const getEmployee = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_EMPLOYEE_REQUEST })
        const { data } = await axios.get(`http://localhost:5500/api/employee`);
        dispatch({
            type: ALL_EMPLOYEE_SUCCESS,
            payload: data,
        })
    }
    catch (err) {
        dispatch({
            type: ALL_EMPLOYEE_FAIL,
            payload: err.response.data.message,
        })
    }
}

//Get employee Details
export const getEmployeeDetails = (empid) => async (dispatch) => {
    try {
        dispatch({ type: EMPLOYEE_DETAILS_REQUEST })
        const { data } = await axios.get(`http://localhost:5500/api/employee/${empid}`)
        dispatch({
            type: EMPLOYEE_DETAILS_SUCCESS,
            payload: data.employee
        })
    } catch (error) {
        dispatch({
            type: EMPLOYEE_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}

// crate Employee
export const createEmployee = (employeeData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_EMPLOYEE_REQUEST })

        const configs = {
            headers: { 'Content-Type': "application/json" }
        }
        const { data } = await axios.post(`http://localhost:5500/api/employee`, employeeData, configs);
        dispatch({
            type: NEW_EMPLOYEE_SUCCESS,
            payload: data,
        })
    }
    catch (err) {
        dispatch({
            type: NEW_EMPLOYEE_FAIL,
            payload: err.response.data.message,
        })
    }
}

// Update Employee
export const updateEmployee = (empid, employeeData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_EMPLOYEE_REQUEST })

        const configs = {
            headers: { 'Content-Type': 'application/json' }
        }
        const { data } = await axios.put(`http://localhost:5500/api/employee/${empid}`, employeeData, configs)

        dispatch({
            type: UPDATE_EMPLOYEE_SUCCESS,
            payload: data.success,
        })
    }
    catch (err) {
        dispatch({
            type: UPDATE_EMPLOYEE_FAIL,
            payload: err.response.data.message
        })
    }
}

// Delete Employee
export const deleteEmployee = (empid) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_EMPLOYEE_REQUEST })

        const { data } = await axios.delete(`http://localhost:5500/api/employee/${empid}`)
        console.log(data, empid, 'data')
        dispatch({
            type: DELETE_EMPLOYEE_SUCCESS,
            payload: data.success
        })
    }
    catch (err) {
        dispatch({
            type: DELETE_EMPLOYEE_FAIL,
            payload: err.response.data.message
        })
    }
}

// Clear Errors
export const clearErors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}