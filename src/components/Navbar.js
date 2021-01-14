import {Link} from "react-router-dom"

const Navbar = () =>{
    return(
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;