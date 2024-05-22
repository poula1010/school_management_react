import { useState } from "react"
import { useEffect } from "react";
import EmployeeTable from "./EmployeeTable"
import axios from "axios";

export default function EmployeePage() {
    const [pagedEmployeeData, setPagedEmployeeData] = useState({
        "totalNumber": 3,
        "currentPage": 0,
        "totalNumberOfPages": 1,
        entities: []
    });
    const [pageData, setPageData] = useState({ page: 0, size: 5 });

    function handleChangePage(event, page) {
        setPageData({ ...pageData, page: page });
    }
    function handleChangeRowsPerPage(event, size) {
        setPageData({ ...pageData, size: size });
    }
    function fetchEmployeeData(page = 0, size = 5) {
        axios.get(`http://localhost:8081/api/student?page=${page}&size=${size}`).then(response => {
            console.log(response);
            setPagedEmployeeData(response.data);
        })
    }
    useEffect(() => {
        fetchEmployeeData(pageData.page, pageData.size);
    }, [pageData])
    return (
        <div className="table-container">
            <EmployeeTable employeeData={pagedEmployeeData} handleChangePage={handleChangePage} pageData={pageData} handleChangeRowsPerPage={handleChangeRowsPerPage} />
        </div>
    )
}