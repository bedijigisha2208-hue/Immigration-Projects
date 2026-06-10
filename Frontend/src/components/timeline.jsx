const Timeline = ({ timelineEvents}) => {
    return (
        <div className="timeline">
            <h3> Timeline</h3>
            {timelineEvents.map((event) => (
                <div key={event.id}>
                    {event.event_type} - {event.event_date}
                </div>

            ))}
        </div>
    );
};
export default Timeline;