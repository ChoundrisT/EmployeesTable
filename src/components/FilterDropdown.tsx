import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type {SelectChangeEvent} from '@mui/material'

type DropdownProps = {
    label:string
    value: string[]
    options: string[]
    onSelect:(value: string[]) =>void
    id?:string
}

export default function Dropdown({label, value, options, onSelect, id='dropdown'}: DropdownProps){
    const handleChange = (event: SelectChangeEvent<typeof value>) => {
        onSelect(event.target.value as string[])
    }
    return(
        <FormControl className="mui-dropdown"  style={{width:"260px"}} size="small">
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                multiple
                labelId={`${id}-label`}
                id={id}
                value={value}
                label={label}
                onChange={handleChange}
                >
                    {options.map((option)=>(
                        <MenuItem key={option} value={option}> 
                            {option}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}