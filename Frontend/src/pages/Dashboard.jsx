import { useEffect, useState} from 'react';
import {getDashboard} from '../api/dashboard';
import ApplicationCard from '../components/applicationCard';
import Timeline from '../components/Timeline';
import "./Dashboard.css";
import FeatureCard from './FeatureCard';
import { FaCalculator } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        console.log("DASHBOARD STARING")
        getDashboard()
        .then((res) => {
            console.log("RAW DATA", res)
            setDashboardData(res)})
        .catch((err) => {
            console.error(err)
        }); 
    }, []);
    if (!dashboardData) {
        return <div>Loading... check dashboard</div>;
    }
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Welcome back, User</h1>
            <h1 className="dashboard-subtitle">Track your immigration journey in one place!</h1>
            <div className="quick-actions">
                <FeatureCard icon ="👤" title="My Information" 
                onClick={() => navigate("/MyInformation")} />
                <FeatureCard icon="🧮" title="Calculator" 
                onClick ={() => navigate("/CRSCalculator", {state: dashboardData.application})} />
                <FeatureCard icon="🌎" title="Recommended Streams"
                onClick ={() => navigate("/RecommendedStreams")} />
            </div>
            <ApplicationCard application={dashboardData.application}/>
             <Timeline timelineEvents={dashboardData.timeline_events} />
             <button onClick={() => navigate("/UpdateApplication" )}>

                Edit Application
             </button>

        </div>
    );
};
export default Dashboard;