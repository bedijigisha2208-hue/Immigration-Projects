const ApplicationCard = ({ application }) => {
    return (
        <div className="card">
            <h2>Application #{application.id} </h2>
            <h3>Status: {application.status}</h3>
            <h3>Submission Date: {application.submission_date}</h3>
        </div>
    );
};
export default ApplicationCard;