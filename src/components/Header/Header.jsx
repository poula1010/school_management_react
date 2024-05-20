import "./Header.css"

function Header() {

    return (
        <header>
            <div className="header-container">
                <div className="logo" aria-expanded="false" aria-label="Main menu" data-ogmb="1" role="button">
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </div>
                <div className="title">
                    School Management
                </div>
            </div>
        </header>
    )
}

export default Header;