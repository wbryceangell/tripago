import "./TripList.css";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

type Trip = { id: string; title: string; price: string; loc: string };

interface Props {}

const TripList: React.FC<Props> = ({}) => {
  const tripsUrl = "http://localhost:3001/trips/invalid";
  const [url, setUrl] = useState(tripsUrl);
  const { data, isPending, error } = useFetch(url);

  useEffect(() => {
    if (error instanceof Error) console.warn(error);
  }, [error]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <div>Loading trips...</div>}
      {!isPending && error && <div>Failed to load trips.</div>}
      {!isPending && (
        <ul>
          {data &&
            data.map((trip: Trip) => (
              <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </li>
            ))}
        </ul>
      )}
      {!isPending && !error && (
        <div className="filters">
          <button onClick={() => setUrl(`${tripsUrl}?loc=europe`)}>
            European Trips
          </button>
          <button onClick={() => setUrl(tripsUrl)}>All Trips</button>
        </div>
      )}
    </div>
  );
};

export default TripList;
