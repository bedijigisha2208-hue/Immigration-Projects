import {getRecommendedStreams} from "../api/recommendedStreams"
import {useState, useEffect} from "react"
import {getDashboard} from "../api/dashboard"

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
    <div>
      <h1> Recommended Streams </h1>
      <pre>
        {JSON.stringify(streams, null, 2)}
      </pre>
      {streams.map((stream) => {
        return (
            <div key={stream.id}>
                <h3>{stream.stream_name}</h3>
                <p> {stream.province}</p>
                <p> {stream.description}</p>
                </div>
        )
      })}
    </div>
);
};
export default RecommendedStreams;