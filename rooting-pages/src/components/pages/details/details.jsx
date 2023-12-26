import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <section id="details">
      <div className="container">
        <div>Details</div>
      </div>
    </section>
  );
};

export default Details;
