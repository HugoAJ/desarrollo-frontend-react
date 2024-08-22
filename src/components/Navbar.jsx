import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            
                <li>
                    <Link to="/default">Default</Link>
                </li>
           
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/forms">Login</Link>
                </li>
                <li>
                    <Link to="/home">Product list</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;