import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employees/employeesSlice"
import departmentsReducer from "../features/dropdownFilter/departmentsSlice"

export const store = configureStore({
    reducer:{
        employees: employeeReducer,
        departments: departmentsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch