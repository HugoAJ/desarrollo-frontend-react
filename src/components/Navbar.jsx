import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//import { saveFormData } from "../redux/form/FormActions";

//const form = useSelector((state) => state.form);
const Navbar =()=>{
    const form = useSelector((state) => state.form);
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

                <li style={{ marginLeft: 'auto' }}>
                    Bienvenido {form.formData.username}: {form.formData.email}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;