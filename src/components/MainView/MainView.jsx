import EmployeeTable from "../Employee/EmployeeTable";
import "./MainView.css"

function MainView() {

    return (
        <div className="main-view" >
            <div className="table-container">
                <EmployeeTable></EmployeeTable>
            </div>

        </div >
    )
}

export default MainView;