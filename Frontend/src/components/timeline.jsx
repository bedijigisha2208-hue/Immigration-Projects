import {updateTimelineEvent} from '../api/upateTimeline';
import '../pages/Timeline.css'
const Timeline = ({ timelineEvents}) => {
     const handleToggle = async(event) => {
                  try {
                     await updateTimelineEvent(
                   event.id,
            {
                completed: !event.completed
            }
        );

        window.location.reload();
        }

    catch(error) {
        console.error(error);
        }
        };
    console.log("TIMELINE",timelineEvents)
    return (
        <div className="timeline">
            <h3> Timeline</h3>
            {timelineEvents.map((event) => (
                <div className= "timeline-event" key={event.id}>
                   <input 
                   type="checkbox"
                   checked={event.completed}
                   onChange= { () => handleToggle(event)} />

                   <div className="timeline-content">
                    <h4>{event.event_type}</h4>
                    <p>{event.description}</p>
                    <small> {event.event_date} </small>
                    </div>
                   
                </div>


            ))}
        </div>
    );
};
export default Timeline;