import airbnbLogo from '../airbnbLogo.png';

function NavBar(){
    return(
        <nav className="navBar">
            <img src={airbnbLogo} alt="Airbnb Logo" className="navLogo"/>
        </nav>
    )
}

export default NavBar