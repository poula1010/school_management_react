import { useState } from "react"
import { useEffect } from "react";
import CourseTable from "./CourseTable"
import axios from "axios";

export default function CoursePage() {
    const [pagedCourseData, setPagedCourseData] = useState({
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
        setPageData(({ page: 0, size: +event.target.value }));
    }
    function fetchStudentData(page = 0, size = 5) {
        axios.get(`http://localhost:8081/api/course?page=${page}&size=${size}`).then(response => {
            console.log(response);
            setPagedCourseData(response.data);
        })
    }
    useEffect(() => {
        fetchStudentData(pageData.page, pageData.size);
    }, [pageData])
    return (
        <div className="table-container">
            <CourseTable courseData={pagedCourseData} handleChangePage={handleChangePage} pageData={pageData} handleChangeRowsPerPage={handleChangeRowsPerPage} />
        </div>
    )
}