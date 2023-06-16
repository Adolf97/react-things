import React from "react";
import { Link } from "react-router-dom";

export default function Home () {

  const lista = ["atanagildo", "ataulfo", "ervigio", "leovigildo", "recesvinto", "sisebuto"]

  return (
    <div className="reyes">
      {
        lista.map(unRey =>
          <Link to={`/reyes/${unRey}`}><img alt={`Rey ${unRey}`} src={`https://html6.es/img/rey_${unRey}.png`} /></Link>)
      }
    </div>
  );
}