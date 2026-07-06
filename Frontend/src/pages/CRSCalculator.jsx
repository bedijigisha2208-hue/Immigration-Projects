import {useState , useEffect} from "react"
import './CRSCalculator.css'
import {calculateCRS} from '../api/crscalculator'
import {updateApplication} from '../api/updateApplication'
import {useLocation} from "react-router-dom"
import {getDashboard} from "../api/dashboard"
const CRSCalculator = () => {
    const [formData, setFormData] = useState({
        age:"",
        experience:"",
        education:"",
        has_spouse:"",
        first_language:"",
        second_language:"",
        has_siblings:"",
        provincial_nomination:"",
        french_language:"",
        canadian_study:"",
        foreign_experience:"",
        spouse_education:"",
        spouse_experience:"",
        spouse_language:"",
    });
    const [application, setApplication] = useState(null);

      useEffect(() => {
         getDashboard().then((res) => {
         setApplication(res.application);
    });
}, []);
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
       
        try {
        const payload = {
            ...formData,
            has_spouse: formData.has_spouse === "true",
            has_siblings: formData.has_siblings === "true",
            provincial_nomination: formData.provincial_nomination === "true",
        };

           const data = await calculateCRS(payload);
            setResult(data);
            alert ("Before API")
             if(!application.id) {
                console.error("No application Id found");
                return;
            }
            const vdata = await updateApplication(application.id ,{
                crs_calculator: data.total_crs_score
            });
           
            alert ("After API");
    }catch(error) {
        console.error(error)
    }
}; 


    
     const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        });

    };
    

    return (

        <div className="CRSCalculator-container">
            <h1> 🧮 CRS Calculator </h1>
            <p>Check your comprehensive ranking system score here!</p>
            <div className="CRS-form">
                <label> Age </label>
                <input 
                type="number"
                name= "age"
                value= {formData.age}
                onChange={handleChange}/>

                <label> Education </label>
                <select 
                name="education"
                value= {formData.education}
                onChange={handleChange}>
                <option value = "">Select Education</option>
                <option value=""> NONE </option>
                <option value="High school Diploma">High-School</option>
                <option value="Bachelor's degree/ 3-year">Bachelors</option>
                <option value="One-year diploma">One-year diploma</option>
                <option value="Two-year diploma">Two-year diploma</option>
                <option value="2+ certificate/diploma/degree">2+ certificate/diploma/degree</option>    
                <option value="Master's degree/ professional degree">Master's degree/ professional degree</option>     
                <option value="Doctoral level/ phd">Doctoral level/ phd</option>      
                </select> 
                

                <label> Experience </label>
                <select
                name="experience"
                value={formData.experience}
                onChange={handleChange} >

                <option value =""> Select Experience </option>
                <option value=""> NONE </option>
                <option value="1 year">1 year </option>
                <option value="2 years"> 2 years </option>
                <option value="3 years"> 3 years </option>
                <option value="4 years"> 4 years </option>
                <option value="5 years or more"> 5 years or more </option>
                </select>

                <label> Spouse </label>
                <select
                name="has_spouse"
                value={formData.has_spouse}
                onChange={handleChange}>
                    <option value=""> Do you have a spouse ? </option>
                    <option value= "true"> Yes </option>
                    <option value= "false"> No </option>
                </select>
                {formData.has_spouse ==="true" && (
                    <>
                    <label> Spouse Education </label>
                    <select 
                    name="spouse_education"
                    value={formData.spouse_education}
                    onChange={handleChange}>
                       <option value = "">Select Education</option>
                       <option value=""> NONE </option>
                       <option value="High school Diploma">High-School</option>
                       <option value="Bachelor's degree/ 3-year">Bachelors</option>
                       <option value="One-year diploma">One-year diploma</option>
                       <option value="Two-year diploma">Two-year diploma</option>
                       <option value="2+ certificate/diploma/degree">2+ certificate/diploma/degree</option>    
                       <option value="Master's degree/ professional degree">Master's degree/ professional degree</option>     
                       <option value="Doctoral level/ phd">Doctoral level/ phd</option> 

                    </select>
                    <label> Spouse Experience </label>
                    <select 
                    name="spouse_experience"
                    value={formData.spouse_experience}
                    onChange={handleChange}>
                        <option value =""> Select Experience </option>
                        <option value=""> NONE </option>
                        <option value="1 year">1 year </option>
                        <option value="2 years"> 2 years </option>
                        <option value="3 years"> 3 years </option>
                        <option value="4 years"> 4 years </option>
                        <option value="5 years or more"> 5 years or more </option>

                    </select>
                    <label> Spouse Language </label>
                    <select 
                    name="spouse_language"
                    value={formData.spouse_language}
                    onChange={handleChange}>
                        <option value=""> NONE </option>
                        <option value="CLB 5"> CLB 5 </option>
                        <option value="CLB 6"> CLB 6 </option>
                        <option value="CLB 7"> CLB 7 </option>
                        <option value="CLB 8"> CLB 8 </option>
                        <option value="CLB 9"> CLB 9 </option>
                        <option value="CLB 10"> CLB 10 </option>
                        <option value="CLB 11"> CLB 11 </option>
                        <option value="CLB 12"> CLB 12 </option>

                    </select>
                    </>
                )}
               <label> First Language </label>
               <select 
               name="first_language"
               value={formData.first_language}
               onChange={handleChange}>
                <option value=""> Select First language CLB (English or French)</option>
                <option value=""> NONE </option>
                <option value="CLB 4"> CLB 4 </option>
                <option value="CLB 5"> CLB 5 </option>
                <option value="CLB 6"> CLB 6 </option>
                <option value="CLB 7"> CLB 7 </option>
                <option value="CLB 8"> CLB 8 </option>
                <option value="CLB 9"> CLB 9 </option>
                <option value="CLB 10"> CLB 10 </option>
                <option value="CLB 11"> CLB 11 </option>
                <option value="CLB 12"> CLB 12 </option>
               </select>
               <label> Second Language </label>
               <select 
               name="second_language"
               value={formData.second_language}
               onChange={handleChange}>
                <option value=""> Select Second Language </option>
                <option value=""> NONE </option>
                <option value="CLB 5"> CLB 5 </option>
                <option value="CLB 6"> CLB 6 </option>
                <option value="CLB 7"> CLB 7 </option>
                <option value="CLB 8"> CLB 8 </option>
                <option value="CLB 9"> CLB 9 </option>
                <option value="CLB 10"> CLB 10 </option>
                <option value="CLB 11"> CLB 11 </option>
                <option value="CLB 12"> CLB 12 </option>
               </select>
               <label> Has Siblings </label>
               <select 
               name="has_siblings"
               value={formData.has_siblings}
               onChange={handleChange}>
                <option value=""> Do you have siblings in canada? </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
               </select>


               <label> Provincial Nomination </label>
               <select 
               name="provincial_nomination"
               value={formData.provincial_nomination}
               onChange={handleChange}>
                <option value=""> Select for PNP </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
               </select>


               <label> French Language </label>
               <select 
               name="french_language"
               value={formData.french_language}
               onChange={handleChange}>
                <option value=""> Select French Language </option>
                <option value=""> NONE </option>
                <option value="LESS_THAN_CLB4_IN_ENGLISH"> NCLC 7 or more in french AND CLB 4 or less in english (didn't take test)</option>
                <option value="MORE_THAN_CLB5_IN_ENGLISH"> NCLC 7 or more in french AND CLB 5 or more in english</option>
               </select>


               
               <label> Canadian Study </label>
               <select 
               name="canadian_study"
               value={formData.canadian_study}
               onChange={handleChange}>
                <option value=""> Select Canadian Study </option>
                <option value=""> NONE </option>
                <option value="1-2 years"> 1-2 years </option>
                <option value="3+ years"> 3+ years </option>
               </select>


               
               <label>  Foreign Experience </label>
               <select 
               name="foreign_experience"
               value={formData.foreign_experience}
               onChange={handleChange}>
                <option value=""> Select Foreign Experience </option>
                <option value="No work or 0 years"> No work or 0 years </option>
                <option value="1-2 years"> 1-2 years </option>
                <option value="3 + years"> 3+ years</option>
               </select>
                {result&& (
                <div className="result-card">
                   <h3> Your CRS score is calculated! </h3>
                   <h2> CRS score: {result.total_crs_score}</h2>
                   <h3> CORE POINTS:</h3>
                   <p> Age: {result.breakdown.age}</p>
                   <p> Education: {result.breakdown.education}</p>
                   <p> Language: {result.breakdown.language}</p>
                   <h3> HUMAN CAPITAL:</h3>
                   <p> Experience: {result.breakdown.experience}</p>
                   <p> Spouse: {result.breakdown.spouse}</p>
                   <h3> TRANSFERABILITY </h3>
                   <p> Tranferability: {result.breakdown.transferability}</p>
                   <h3> ADDITIONAL:</h3>
                   <p> Additional: {result.breakdown.additional}</p>

                </div>
            )}



             <button
             onClick={handleCalculate}>
                Calculate CRS
             </button>
           
            </div>
        </div>
    );
}
export default CRSCalculator;