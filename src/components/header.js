import logo from './logo.svg';

function Header(props){
    return(
        <header>
            <nav className={props.darkMode ? "dark nav": "nav"}>
                <div className="right-top">
                    <img src={logo} className="img-logo" alt="logo"/>
                    <h3>ReactFacts</h3>
                </div>
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div 
                        className="toggler--slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
        </header>
    )
}

export default Header