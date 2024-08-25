import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/FormActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";
import { passwordKey } from "../../redux/form/FormReducers";
import { Link } from "react-router-dom";
import ModalLogout from "../../components/ModalLogout";
import { cleanFormData } from "../../redux/form/FormActions";

const Login = () => {

    const [values, handleChange, resetForm] = useForm({
        username: '',
        email: '',
        password: '',
    });
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);


    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(values);
        //dispatch(saveFormData(values));
        if (values.password == passwordKey) 
        {
            dispatch(saveFormData(values));
        } 
        console.log(saveFormData(values));   
    };
    const hideModalInfo = () => {
        setShowModalInfo(false);
    };
    const showModal	= () => {
        if (values.password != passwordKey) 
            {
                setShowModalInfo(true);
            } 
        //setShowModalInfo(true);
    };
    const hideModalLogout = () => {
        setShowModalLogout(false);
    };
    const showModalLog	= () => {
        if (form.formData.username!='') 
            {
                setShowModalLogout(true);
            }
        //setShowModalLogout(true);
    };

    const deleteFormData = () => {
        dispatch(cleanFormData());
        resetForm();
        setShowModalLogout(false);
    }

    const [showPass, setShowPassword] = useState(false);


    const showPassword = () => {
        setShowPassword(!showPass);
    }

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration:0.5}}
        >
        <ModalInfo
            visible={showModalInfo}
            message="Password incorrecto"
            onClose={hideModalInfo}
        />
        <ModalLogout
            visible={showModalLogout}
            message="Estás seguro de que quieres cerrar sesión? "
            onClose={hideModalLogout}
            onLogout={deleteFormData}
        />
        <div className="container">
            {/*<ModalInfo
                visible={showModalInfo}
                message="Welcome"
                onClose={hideModalInfo}
            />*/}
            <form onSubmit={handleSubmit}>
                
                <h2>LOGIN FORM</h2>
                <h5>Username: {form.formData.username}</h5>
                {/*<h5>email: {form.formData.email}</h5>
                <h5>password: {form.formData.password}</h5>*/}

                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        value={values.username} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={values.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type={showPass ? 'password' : 'text'} 
                        id="password" 
                        name="password"
                        value={values.password} 
                        onChange={handleChange} 
                    />
                    <button onClick={showPassword} type="button">{ showPass ? 'Show' : 'Hide'}</button>
                </div>
                <div className="button-container">
                    <button onClick={showModal} type="submit">Submit</button>
                    <Link onClick={showModalLog} style={{ marginLeft: '10px', textDecoration: 'underline', color: '#0000EE',  }}>Logout</Link>                
                </div>
            </form>
        </div>
        </motion.div>
    );
};

export default Login;