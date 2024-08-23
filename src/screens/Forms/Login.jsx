import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/FormActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";

const Login = () => {

    const [values, handleChange] = useForm({
        username: '',
        email: '',
        password: '',
    });
    const [showModalInfo, setShowModalInfo] = useState(true);


    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));
    }
    const hideModalInfo = () => {
        setShowModalInfo(false);
    }

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration:0.5}}
        >
        <div className="container">
            <ModalInfo
                visible={showModalInfo}
                message="Welcome"
                onClose={hideModalInfo}
            />
            <form onSubmit={handleSubmit}>
                <h5>username: {form.formData.username}</h5>
                <h5>email: {form.formData.email}</h5>
                <h5>password: {form.formData.password}</h5>

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
                        type="password" 
                        id="password" 
                        name="password"
                        value={values.password} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="button-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        </motion.div>
    );
};

export default Login;