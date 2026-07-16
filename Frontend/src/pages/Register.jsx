import {registerUser} from '../api/Register'
import {useState} from 'react'
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import './Form.css'

function Home() {
    return (
        <div>
            <Link to="/Register"> Go to Register </Link>
        </div>
    );
}

const Register = () => {
    const[formData , setFormData] = useState({
        username:"",    
        email:"",
        country_of_citizenship:"",
        current_status:"",
        immigration_goal:"",
        password:"",
        confirm_password:"",
        });
const handleChange = (e) => {
    setFormData ({
        ...formData,
        [e.target.name]: e.target.value
    });
};
const handleSubmit = async(e) => {
    e.preventDefault();


if(formData.password !== formData.confirm_password){
    toast.error("PASSWORD DON'T MATCH");
    return
}
try {
    console.log("Submitting", formData)
    const response = await registerUser(formData)
    console.log("Success", response)
    toast.success("Registration Successful")
} catch(error) {
    console.error(error)
}
};



return(
<div className="RegisterUser">
    <h1> REGISTER USER </h1>
    <div className="registration-form">
        <form onSubmit={handleSubmit}>
            <input 
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}/>


        <input 
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}/>


        <input 
        name="country_of_citizenship"
        placeholder="Country of Citizenship"
        value={formData.country_of_citizenship}
        onChange={handleChange}/>


        <input 
        name="current_status"
        placeholder= "Current Status"
        value={formData.current_status}
        onChange={handleChange}/>


        <input 
        name="immigration_goal"
        placeholder="Immigration Goal"
        value={formData.immigration_goal}
        onChange={handleChange}/>

        <input 
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}/>

        <input 
        name="confirm_password"
        placeholder="Confirm Password"
        value={formData.confirm_password}
        onChange={handleChange}/> 

        <button type="submit"
        onClick={handleSubmit}>
            Register
        </button>
        <p>
            Already have an account? <Link to="/Login"> Login </Link>
        </p>


        </form>
    </div>
</div>
);
};

export default Register