import { useState } from "react"
import { useEffect } from "react";
import StudentTable from "./StudentTable"
import axios from "axios";

export default function StudentPage() {
    const [pagedStudentData, setPagedStudentData] = useState({
        "totalNumber": 3,
        "currentPage": 0,
        "totalNumberOfPages": 1,
        entities: []
    });
    const [pageData, setPageData] = useState({ page: 0, size: 5 });

    function handleChangePage(event, page) {
        setPageData({ ...pageData, page: page });
    }
    function handleChangeRowsPerPage(event) {
        setPageData((prevData) => ({ page: 0, size: +event.target.value }));
    }
    function fetchStudentData(page = 0, size = 5) {
        axios.get(`http://localhost:8081/api/student?page=${page}&size=${size}`).then(response => {
            setPagedStudentData(response.data);
        })
    }
    useEffect(() => {
        fetchStudentData(pageData.page, pageData.size);
    }, [pageData])
    return (
        <div className="table-container">
            <StudentTable studentData={pagedStudentData} handleChangePage={handleChangePage} pageData={pageData} handleChangeRowsPerPage={handleChangeRowsPerPage} />
        </div>
    )
}