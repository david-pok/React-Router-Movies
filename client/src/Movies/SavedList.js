import React from "react";
import { Link, NavLink } from "react-router-dom";
import { render } from "react-dom";

const SavedList = props => {
  console.log("savedList props", props);

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          to={`/movies/${movie.id}`}
          activeStyle={{ background: "green", color: "white" }}
        >
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <Link to={"/"}>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
};

export default SavedList;
