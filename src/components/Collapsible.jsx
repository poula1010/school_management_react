
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown
} from "@fortawesome/fontawesome-free-solid";


const Collapsible = ({ open, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div className="card  mb-3" >
                <div>
                    <div className="p-2 border-bottom d-flex justify-content-between" style={{ background: "#c7ddd2" }}>
                        <h6 className="font-weight-bold" style={{ "paddingTop": "0.5rem" }}>{title}</h6>
                        <button type="button" className="btn" onClick={handleFilterOpening}>
                            {!isOpen ? (
                                <FontAwesomeIcon icon={faChevronDown} />
                            ) : (
                                <FontAwesomeIcon icon={faChevronUp} />
                            )}
                        </button>
                    </div>
                </div>

                <div className="border-bottom">
                    <div>{isOpen && <div className="p-3">{children}</div>}</div>
                </div>
            </div>
        </>
    );
}; export default Collapsible;