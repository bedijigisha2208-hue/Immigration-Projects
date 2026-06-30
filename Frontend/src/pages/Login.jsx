import { useState } from 'react'
import { loginUser } from '../api/login'


const Login = () => {
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
    
    try {
        console.log(formData)
        const response = await loginUser(formData)
        console.log("Login Sucessfull", response)
        localStorage.setItem("token", response.token);
        alert("Login Sucessfull")
    } catch(error) {
        console.error(error)
    }
    };

    return (
        <div className="login-page">
            <h2> Login User </h2>
            <div className="Login Form">
                <form onSubmit={handleSubmit}>
                    <input 
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}/>


                    <input 
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}/>

                    <button type="submit">
                        Login
                    </button>


                </form>
            </div>
        </div>
    );
};
export default Login