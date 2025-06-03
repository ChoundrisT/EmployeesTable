import {TextField} from "@mui/material"
import { useEffect, useState } from "react"

interface FilterNameProps {
    inputSearched: (value: string)=> void
    resetTrigger?: boolean
    searchValue: string
}


export default function FilterName({inputSearched, resetTrigger, searchValue } :FilterNameProps){

    const [ value,setValue]= useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = event.target.value
        setValue(newValue)
        inputSearched(newValue)
    }

    useEffect(()=>{
        setValue('')
    },[resetTrigger])
    
    useEffect(()=>{
        setValue(searchValue)
    },[searchValue])
    
    
    
    return(
        <>
        <TextField 
            className="mui-text-field"
            label="Search"
            variant="outlined"
            value={value}
            onChange={handleChange}
            size="small"
        />
        </>
    )
}