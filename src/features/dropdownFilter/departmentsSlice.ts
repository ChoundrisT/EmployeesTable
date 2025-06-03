import { createSlice } from "@reduxjs/toolkit"
import type  {PayloadAction} from "@reduxjs/toolkit/"

interface DepartmentsState {
    departments: string[]
}

const initialState: DepartmentsState = {
    departments: []
}

const departmentsSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {
        setDepartments(state, action: PayloadAction<string[]>){
            state.departments = action.payload
        },
        clearDepartments(state) {
            state.departments = []
        }
    }
})

export const { setDepartments, clearDepartments } = departmentsSlice.actions
export default departmentsSlice.reducer