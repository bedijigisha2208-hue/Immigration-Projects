import { useState , useEffect } from 'react'
import { loginUser } from '../api/login'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {getDashboard} from '../api/dashboard'
import toast from 'react-hot-toast'
import './Form.css'
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value ,
        });
    };
    useEffect(() => {
        getDashboard()
        .then((res) => {
            setFormData(res.application);
        })
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();
    
    try {
        console.log(formData)
        const response = await loginUser(formData)
        localStorage.setItem("token", response.token);
        const dashboardData = await getDashboard();
        if (dashboardData.application) {
            navigate("/Dashboard");
        } else {
            navigate("/CreateApplication");
        }
        toast.success("Login Successful")
     

    } catch(error) {
        console.error(error)
        toast.error("WRONG CREDENTIALS")
    }
    };

    return (
        <div className="login-page">
            <h1> Login User </h1>
            <div className="login-form">
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
                    <p> Don't have an account? <Link to="/Register"> Register </Link>
                    </p>


                </form>
            </div>
        </div>
    );
};
export default Login