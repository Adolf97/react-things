import React from "react";
import { useParams } from "react-router-dom";

export default function Modelo () {

  const {rey} = useParams();
  const reyUpperCase = rey.substring(0,1).toUpperCase() + rey.substring(1);

  return (
    <div>
      <img src={`https://html6.es/img/rey_${rey}.png`} alt={`Rey ${rey}`} />
      <h1>{reyUpperCase}</h1>
    </div>
  );
}