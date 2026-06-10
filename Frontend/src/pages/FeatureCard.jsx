const FeatureCard = ({ icon , title, onClick}) => {
    return (
        <div className="feature-card" onClick ={onClick}>
            <div className="feature-icon">
                <span>{icon}</span>
            </div>
            <h3>{title}</h3>
        </div>
    );
};
export default FeatureCard;
