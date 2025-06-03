import { lazy , Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRoutes() {

  const TableComponent = lazy(()=>import('../components/TableComponent'))
  const EmployeeDetails = lazy(()=>import('../components/EmployeeDetails'))


  return (
  <>
  <Suspense fallback={<div style={{height: "100vh",display:"flex",fontFamily:"Roboto",fontSize:"1.5rem"}}>Loading...</div>}>
    <Router>
      <Routes>
        <Route path="/" element={<TableComponent/>}/> 
        <Route path="/:id" element={<EmployeeDetails/>}/>
      </Routes>
    </Router>
  </Suspense>
  </>
  )
}