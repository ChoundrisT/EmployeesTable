import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import type  {PayloadAction} from "@reduxjs/toolkit/"

export interface Employee{
    id: number
    fullName: string
    department: string
    email: string
    status: string
    hireDate?: string
    notes?: string
}

interface EmployeeState{
    employees: Employee[]
    loading: boolean
    error: string | null
}

const initialState: EmployeeState = {
    employees: [],
    loading: false,
    error: null
}

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    async ()=>{
        const response = await fetch('http://localhost:3001/employees')
        if (!response.ok) throw new Error('Error fetching employees')
            return (await response.json()) as Employee[]
    }
)

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
            .addCase(fetchEmployees.pending, (state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(fetchEmployees.fulfilled, (state,action: PayloadAction<Employee[]>)=>{
                state.loading = false
                state.employees = action.payload
            })
            .addCase(fetchEmployees.rejected, (state, action)=>{
                state.loading = false
                state.error = action.error.message || 'Failed to fetch employees'
            })
    }
})

export default employeesSlice.reducer