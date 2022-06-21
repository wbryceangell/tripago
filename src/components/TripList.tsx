import "./TripList.css";
import { useEffect, useState } from "react";

type Trip = { id: string; title: string; price: string };

interface Props {}

const TripList: React.FC<Props> = ({}) => {
  const [trips, setTrips] = useState<Array<Trip>>([]);
  useEffect(() => {
    fetch("http://localhost:3001/trips")
      .then((response) => response.json())
      .then(setTrips);
  }, []);
  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
