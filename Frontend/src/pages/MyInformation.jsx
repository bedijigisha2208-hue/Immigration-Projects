import './MyInformation.css'
import {useEffect, useState} from "react"
import {getDashboard} from "../api/dashboard"
import {updateApplication} from "../api/updateApplication"


      
    const MyInformation = () => {
        const [dashboardData, setDashboardData] = useState(null);
useEffect(() => {
    getDashboard(3)
    .then((data) => {setDashboardData(data)} )
    .catch((error) => console.error(error)) 
} , []);
if (!dashboardData)
    return  <div>.....Loading</div>;
    

    return (
        <div className= "info-container">
            <div className="info-header">
            <h1>👤 My Information Profile </h1>
            <h3>Manage your personal and immigration information here!</h3>
            </div>
            <div className="Progress-tracker">
                <h3>Profile Completion</h3>
                <div className="Progress-card">
                    <div className="Progress-fill"></div>
                </div>
                <span> 80% </span>
            </div>
            <div className="stats-grid">
                <div className="stats-card">
                    <h4> CRS Score </h4>
                    <p> {dashboardData.application.crs_calculator} </p>
                </div>
                <div className="stats-card">
                    <h4> Province </h4>
                    <p> {dashboardData.application.province} </p>
                </div>
                <div className="stats-card">
                    <h4> Status </h4>
                    <p>{dashboardData.application.application_status}</p>
                </div>
                <div className="stats-card">
                    <h4> Age </h4>
                    <p> {dashboardData.application.age} </p>
                </div>
            </div>

                <div className="info-card">
                   <h2> Personal Information </h2>
                   <div className="info-grid">
                    <div className="info-item">
                        <label> Full Name </label>
                        <p>{dashboardData.user.username}</p>
                    </div>
                    <div  className="info-item">
                        <label> Age </label>
                        <p> {dashboardData.application.age} </p>
                    </div>
                    <div  className="info-item">
                        <label> Marital Status </label>
                        <p> {dashboardData.application.marital_status} </p>
                    </div>
                   </div>
                </div>
            <div className="info-card">
                <h2> Immigration Information </h2>
                <div className="info-grid">
                    <div  className="info-item">
                        <label> Province </label>
                        <p> {dashboardData.application.province}  </p>
                    </div>
                    <div  className="info-item">
                        <label> Status </label>
                        <p>{dashboardData.application.application_status}</p>
                    </div>
                    <div  className="info-item">
                        <label> CRS Score </label>
                        <p> {dashboardData.application.crs_calculator} </p>
                    </div>
                    <div  className="info-item">
                        <label> Submission Date </label>
                        <p> {dashboardData.application.submission_date}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
    export default MyInformation;        