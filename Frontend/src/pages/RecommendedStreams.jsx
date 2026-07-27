import {getRecommendedStreams} from "../api/recommendedStreams"
import {useState, useEffect} from "react"
import {getDashboard} from "../api/dashboard"
import './RecommendeStreams.css'

const RecommendedStreams = () => {
const [Application, setApplication] = useState(null);
const [streams, setStreams] = useState([]);
useEffect(() => {
    getDashboard()
    .then((res) => {
        setApplication(res.application)
    });
}, []);
useEffect(() => {
    if(!Application) return;
    getRecommendedStreams({
        crs_score: Application.crs_calculator,
        province: Application.province
    })
    .then((res) => {
        console.log("RECOMMENDED STREAMS", res)
        setStreams(res);

    })
    .catch((err) => {
        console.error(err);
    })
} , [Application]);
return (
    <div className="recommended-cards">
      <h1> 🌎  Recommended Streams </h1>
      {streams.map((stream) => {
        return (
            <div className="card-name" key={stream.id}>
                <h3>{stream.stream_name}</h3>
                <div className="stream-info">
                    <span>🌎 {stream.country}</span>
                    <span>⭐ CRS {stream.minimum_crs}</span>
                    <span>⏳ {stream.processing_time}</span>
                    </div>
                <div className="card-details">
                <p> {stream.province}</p>
                <p> {stream.description}</p>
                </div>
                </div>
        )
      })}
    </div>
);
};
export default RecommendedStreams;