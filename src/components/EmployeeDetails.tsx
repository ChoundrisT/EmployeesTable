import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';


export default function BasicCard() {

    const location = useLocation()

    const employee = location.state?.employee



  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {employee.fullName}
        </Typography>
        <Typography variant="h5" component="div">
          {employee.department}
        </Typography>
        <Typography sx={{ backgroundColor:
                            employee.status === 'Inactive'
                            ? '#f24a44'
                            :employee.status ==='Active'
                            ?'#71f093'
                            :employee.status ==='On Leave'
                            ?'#f5ad64'
                            :'transparent'
            ,color: 'text.secondary', mb: 1.5 }}>{employee.status}</Typography>
        <Typography variant="body2">
            Email: {employee.email}
            <br />
            Hire Date: {employee.hireDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography fontStyle="italic" color="text.secondary">
            {employee.notes}
        </Typography>
      </CardActions>
    </Card>
  );
}
