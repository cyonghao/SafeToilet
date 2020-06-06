import React from "react";
import "../App.css";

export const Card = (location) => {
  const data = location.location;

  const IsApproved = () => {
    if (data.approved === true) {
      return <span className="badge badge-success ml-2">Approved</span>;
    } else {
      return <span className="badge badge-danger ml-2">Not Approved</span>;
    }
  };

  const IsUnisex = () => {
    if (data.unisex === true) {
      return <span className="badge badge-success ml-2">Unisex</span>;
    } else {
      return null;
    }
  };

  const IsWheelchairAccessible = () => {
    if (data.accessible === true) {
      return (
        <span className="badge badge-success ml-2">Wheelchair Accessible</span>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="card mb-3 text-left">
      <div className="row no-gutters">
        <div className="card-body">
          <h5 className="card-title mb-1">{data.name}</h5>
          <p className="card-text text-muted float-right">
            {(data.distance * 1.60934).toFixed(3)}km
          </p>
          <p>
            <IsApproved />
            <IsUnisex />
            <IsWheelchairAccessible />
          </p>
          <h6 className="card-subtitle text-muted">
            {data.street}, {data.city}, {data.state}
          </h6>
          <div className="mt-3">
            <span>
              <span>{data.upvote}</span>
              <span className="material-icons text-secondary ml-1">
                thumb_up
              </span>
            </span>
            <span className="ml-3">
              <span>{data.downvote}</span>
              <span className="material-icons text-secondary ml-1">
                thumb_down
              </span>
            </span>
          </div>
          <p className="card-text mt-2">{data.comment}</p>
        </div>
      </div>
    </div>
  );
};
