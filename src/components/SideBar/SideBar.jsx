import "./SideBar.css"

function SideBar() {


    return (
        <div className="side-bar">
            <div className="selection-tab">
                <div className="selection">Employee</div>
                <div className="selection">Student</div>
                <div className="selection"  >Course</div>
            </div>
        </div>
    )
}

export default SideBar;