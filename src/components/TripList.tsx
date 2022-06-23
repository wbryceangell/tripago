import "./TripList.css";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

type Trip = { id: string; title: string; price: string; loc: string };

interface Props {}

const TripList: React.FC<Props> = ({}) => {
  const tripsUrl = "http://localhost:3001/trips";
  const [url, setUrl] = useState(tripsUrl);
  const { data: trips }: { data: Array<Trip> } = useFetch(url);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl(`${tripsUrl}?loc=europe`)}>
          European Trips
        </button>
        <button onClick={() => setUrl(tripsUrl)}>All Trips</button>
      </div>
    </div>
  );
};

export default TripList;
