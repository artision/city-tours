import React, { Component } from "react";
import "./tourlist.scss";
import Tour from "../Tour/tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const filter = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: filter
    });
  };

  render() {
    console.log(this.state.tours);
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
