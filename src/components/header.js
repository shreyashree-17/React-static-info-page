import logo from './logo.svg';

function Header(){
    return(
        <header>
            <nav className="nav">
                <div className="right-top">
                    <img src={logo} className="img-logo" alt="logo"/>
                    <h3>ReactFacts</h3>
                </div>
                <h4 className="left-top">React Course - Project 1</h4>
            </nav>
        </header>
    )
}

export default Header