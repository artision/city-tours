import React from "react";
import "./tour.scss";

function Tour() {
  return (
    <article className="tour">
      <div className="img-container">
        <img
          width="400"
          src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <span className="close-btn">
          <i className="fas fa-windows-close" />
        </span>
      </div>
    </article>
  );
}

export default Tour;
