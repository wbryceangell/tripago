import { Fragment, useEffect, useState } from "react";

type Trip = { title: string; price: string };

interface Props {}

const TripList: React.FC<Props> = ({}) => {
  const [trips, setTrips] = useState<Array<Trip>>([]);
  useEffect(() => {
    fetch("http://localhost:3001/trips")
      .then((response) => response.json())
      .then(setTrips);
  }, []);
  return (
    <div>
      {trips.map((trip) => (
        <Fragment key={crypto.randomUUID()}>
          <h2>{trip.title}</h2>
        </Fragment>
      ))}
    </div>
  );
};

export default TripList;
