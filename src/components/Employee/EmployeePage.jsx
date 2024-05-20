import { useState } from "react"
import { useEffect } from "react";
import EmployeeTable from "./EmployeeTable"
export default function EmployeePage() {
    const [employeeData, setEmployeeData] = useState({});
    useEffect(() => { }, [])
    return (
        <div className="table-container">
            <EmployeeTable employeeData={employeeData} setEmployeeData={setEmployeeData} />
        </div>
    )
}