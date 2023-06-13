import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    employeesReducer,
    employeeReducer,
    newEmployeeReducer,
    employeeDetailsReducer
} from './reducers/employeeReducer';

const reducer = combineReducers({
    employees: employeesReducer,
    newEmployee: newEmployeeReducer,
    employee: employeeReducer,
    employeeDetails: employeeDetailsReducer,
})

let initialState = {

}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;