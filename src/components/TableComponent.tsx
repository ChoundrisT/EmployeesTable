import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import {default as FilterDropdown} from './FilterDropdown'
import FilterName from './FilterName'
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../features/employees/employeesSlice";
import type { RootState, AppDispatch} from '../app/store'
import type { Employee } from "../features/employees/employeesSlice";
import { setDepartments } from "../features/dropdownFilter/departmentsSlice";


export default function TableComponent(){

    const dispatch = useDispatch<AppDispatch>()

    const { employees, loading, error} = useSelector((state: RootState) =>state.employees)
    const departments = useSelector((state: RootState) => state.departments.departments)

    const storedSearch = localStorage.getItem("employeeSearch") || ""
    const storedDropdown = JSON.parse(localStorage.getItem("employeeDepartments") || "[]") as string[]


    const [valueForTable,setValueForTable] = useState(storedSearch)
    const [resetTrigger,setResetTrigger] = useState(false)
    const [dropdown,setDropdown] = useState<string[]>(storedDropdown)

    const navigate = useNavigate()

    const search = valueForTable.toLowerCase()

    function navigateToPage(employee: Employee){
        navigate(`/${employee.id}`, {state: {employee}})
    }

    const inputSearched = (valueReceived: string)=>{
      setValueForTable(valueReceived)
    }


    useEffect(()=>{
        dispatch(fetchEmployees())
    },[dispatch])

    useEffect(()=>{
        const uniqueDepartments = [...new Set(employees.map(employee => employee.department))]
        dispatch(setDepartments(uniqueDepartments))
    },[employees,dispatch])

    useEffect(()=>{localStorage.setItem("employeeSearch", valueForTable)},[valueForTable])

    useEffect(()=>{localStorage.setItem("employeeDepartments", JSON.stringify(dropdown))},[dropdown])

    function onSelect(selectedValues: string[]){
        setDropdown(selectedValues)
    }


    const filteredEmployees = employees.filter((employee: Employee) =>{
        if (search === "" && dropdown.length ===0) return true;

        const matchesDepartment = dropdown.length ===0 || dropdown.includes(employee.department)

        const fullNameSeparated = employee.fullName.toLowerCase().split(" ")
        const matchesName = fullNameSeparated.some(firstOrLast => firstOrLast.startsWith(search))
        const matchesEmail = employee.email.toLowerCase().startsWith(search)

        return matchesDepartment && (matchesName || matchesEmail)

    })

    function resetFilters(){
        setValueForTable("")
        setDropdown([])
        setResetTrigger(prev=>!prev)
        localStorage.removeItem("employeeSearch")
        localStorage.removeItem("employeeDepartments")
    }
    
    
    return(
        <>
        <Box display="flex"  alignItems="flex-start" gap={2} >
            <Box display="flex" flexDirection="column" gap={2} >
                <FilterDropdown label="Department" value={dropdown} options={departments} onSelect={onSelect}/>
                <FilterName resetTrigger={resetTrigger} inputSearched = {inputSearched} searchValue={valueForTable}/>
                <Button type="reset" variant="outlined" color="error" onClick={resetFilters}>
                    Reset Filters
                </Button>
            </Box>
        <TableContainer>
            <Table >
                <TableHead className="mui-t-header" >
                    <TableRow >
                        <TableCell>Full Name</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow >
                </TableHead>
                <TableBody>
                    {filteredEmployees.length > 0 ? (
                    filteredEmployees.map((employee) =>(
                        <TableRow  key={employee.id} onClick={()=>navigateToPage(employee)}>
                            <TableCell>{employee.fullName}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.status}</TableCell>
                        </TableRow >
                    )
                    )):
                        <TableRow>
                            <TableCell colSpan={4} style ={{textAlign:"center", fontSize:"22px"}}> No employees found</TableCell>
                        </TableRow >
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </Box>
        </>
    )
}