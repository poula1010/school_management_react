import "./SideBar.css"
import { NavLink } from "react-router-dom";
function SideBar() {


    return (
        <div className="side-bar">
            <div className="nav flex-column nav-pills selection-tab" aria-orientation="vertical">
                <NavLink
                    to={"/teachers"}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active nav-link selection"
                            : isPending
                                ? "pending nav-link selection"
                                : "nav-link selection"
                    }
                >
                    Employee
                </NavLink>
                <NavLink
                    to={`/students`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active nav-link selection"
                            : isPending
                                ? "pending nav-link selection"
                                : "nav-link selection"
                    }
                >
                    Student
                </NavLink>
                <NavLink
                    to={`/courses`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active nav-link selection"
                            : isPending
                                ? "pending nav-link selection"
                                : "nav-link selection"
                    }
                >
                    Course
                </NavLink>

            </div>
        </div>
    )
}

export default SideBar;