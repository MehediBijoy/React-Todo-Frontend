import icon from "../assets/todo-list.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <img src={icon} alt="" className="navbar__logo" />
                <button className="navbar__login">Login</button>
            </div>
        </nav>
    )
}

export default Navbar