import { useNavigate } from "react-router-dom";
import { useState } from "react"
import "./StudentForm.css"
import axios from "axios";
export default function StudentForm() {
    const [studentData, setStudentData] = useState({ "personalDetails": { "firstname": "f", "lastname": "l", "ssn": "" }, "address": { "city": "", "street": "" } });
    const navigate = useNavigate();
    function handlePersonalDetailChange(event) {
        setStudentData(prevStudentData => ({
            ...prevStudentData,
            "personalDetails": {
                ...(prevStudentData.personalDetails),
                [event.target.name]: event.target.value
            }
        }))
    }
    function handleAddressChange(event) {
        setStudentData(prevStudentData => ({
            ...prevStudentData,
            "address": {
                ...(prevStudentData.address),
                [event.target.name]: event.target.value
            }
        }))
    }
    function onSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:8081/api/student",
            studentData, {
            headers: {
                'Content-Type': 'application/json'

            }
        }).then(resposnse => {
            console.log(resposnse);
            navigate("/students");
        })
    }
    return (
        <div className="row form-container">
            <div className="card pt-3">
                <div className="mb-4">New Student Form</div>

                <form onSubmit={onSubmit}>
                    <div className="mb-3 row ">
                        <label className="col-form-label col-sm-2">Firstname</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control " id="firstname" name="firstname" onChange={handlePersonalDetailChange} value={studentData.personalDetails.firstname} aria-describedby="firstname" />

                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-form-label col-sm-2">Lastname</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="lastname" onChange={handlePersonalDetailChange} value={studentData.personalDetails.lastname} id="lastname" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-form-label col-sm-2">SSN</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="ssn" onChange={handlePersonalDetailChange} value={studentData.ssn} id="ssn" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-form-label col-sm-2">City</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="city" value={studentData.address.city} onChange={handleAddressChange} id="city" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-form-label col-sm-2">Street</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="street" value={studentData.address.street} onChange={handleAddressChange} id="street" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">

                        <button className="btn btn-success mb-3 add-btn">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}