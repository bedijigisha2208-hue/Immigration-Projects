import {useEffect, useState} from "react"
import {getDashboard} from "../api/dashboard"
const ApplicationCard = ({ application }) => {
    return (
        <div className="card">
            <h2>Application #{application.id} </h2>

            <span className="status-pill"> {application.application_status} </span>
            <p>{application.submission_date}</p>
        </div>
    );
};
export default ApplicationCard;