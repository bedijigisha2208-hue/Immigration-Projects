import { useEffect, useState} from 'react';
import {getDashboard} from '../api/dashboard';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        getDashboard(3)
        .then((data) => {setDashboardData(data)})
        .catch((error) => {console.error(error)});
    }, []);
    if (!dashboardData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Application ID: {dashboardData.application.id}</h2>
            <h3>Timeline </h3>
            {dashboardData.timeline_events.map((event) => (
                <div key={event.id}>
                    {event.event_type} - {event.event_date}
                </div>
            ))}
        </div>
    );
}
export default Dashboard;