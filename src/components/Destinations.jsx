import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/apiContext";
import Card from "./Card";
export default function Destinations() {
  const [places, setPlaces] = useState(null);
  const { getAllPlaces } = useContext(ApiContext);

  const getPlaces = async function () {
    const data = await getAllPlaces();
    setPlaces(data);
  };
  useEffect(() => {
    getPlaces();
  }, []);
  return (
    <div>
      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="sm:text-3xl lg:text-4xl title-font mb-4 text-gray-900 capitalize font-bold ">Popular Places</h1>
      </div>
      <div className="mx-auto container py-8">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          {places &&
            places.map((place) => {
              return <Card key={place._id} place={place} />;
            })}
        </div>
      </div>
    </div>
  );
}
