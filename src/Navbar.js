import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <nav id="navbar" className="navbar">

            <div id="container">
            
                <h1>SKN Blogs</h1>

                <div id="links" className="links">

                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/create" className="nav-link">New Blog</Link>
                    <Link to="/create-user" className="nav-link">Create Account</Link>
                    <Link to="/sign-in-out" className="nav-link">Sign In/Out</Link>

                </div>

            </div>

        </nav>

    );

};

export default Navbar;