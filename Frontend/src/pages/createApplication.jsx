import {useState} from 'react';
import {createApplication} from '../api/createApplication';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const CreateApplication = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user: "",
        application_type:"",
        status:"",
        country_of_origin:"",
        destination_country:"",
        submission_date:"",
        province:"",
        marital_status:"",
        age:"",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

    
        try{
            const response = await createApplication(formData);
            navigate("/Dashboard");
        }
        catch(error){
            console.error(error);
        }

    };

    return (
        <div className="create-application-page">
            <h2> Create Application </h2>
            <div className="create-application-form">
                <form onSubmit={handleSubmit}>
                    <label> User</label>
                    <input
                    name="user"
                    type="text"
                    placeholder="User"
                    value={formData.user}
                    onChange={handleChange} />

                    <label> Application Type </label>
                    <select 
                    name="application_type"
                    value={formData.application_type}
                    onChange={handleChange}>
                        <option value=""> Select </option>
                        <option value="Student Visa"> Student Visa </option>
                        <option value= "Work Visa"> Work Visa </option>
                        <option value= "Permanent Residency"> Permanent Residency</option>
                        <option value="PNP"> Provincial Nominee Program</option>
                        <option value= "Express Entry"> Express Entry</option>
                        <option value= "Asylum"> Asylum </option>
                        <option value= "Tourist Visa"> Tourist Visa </option>
                    </select>
                    <label> Status </label>
                    <select 
                    name="status"
                    value={formData.status}
                    onChange={handleChange}>
                        <option value=""> Select </option>
                        <option value="Pending"> Pending </option>
                        <option value="Approved"> Approved </option>
                        <option value="Rejected"> Rejected </option>
                        <option value="Draft"> Draft </option>
                    </select>
                    <label> Country of Origin </label>
                    <input 
                    name="country_of_origin"
                    type="text"
                    value={formData.country_of_origin}
                    onChange={handleChange} />
                    <label> Destination Country </label>
                    <input 
                    name="destination_country"
                    type="text"
                    value={formData.destination_country}
                    onChange={handleChange}/>
                    <label> Submission Data </label>
                    <input 
                    name="submission_date"
                    type="date"
                    value={formData.submission_date}
                    onChange={handleChange} />
                    <label> Province </label>
                    <input 
                    name="province"
                    type="text"
                    value={formData.province}
                    onChange={handleChange} />
                    <label> Marital Status </label>
                    <input 
                    name="marital_status"
                    type="text"
                    value={formData.marital_status}
                    onChange={handleChange} />
                    <label> Age </label>
                    <input 
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange} />

                    <button type="submit"> Submit </button>

                   
                </form>
            </div>
        </div>
    )
}
export default CreateApplication;