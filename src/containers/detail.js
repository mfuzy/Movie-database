import React from "react";
import "./detail.css";
import { connect } from "react-redux";
import { pridaj } from "../actions/moviesActions";

class Detail extends React.Component {
  render() {
    const index = this.props.movies.index;
    const najdene = this.props.movies.najdene;
    const film = najdene[index];
    const detail = (
      <ul>
        <li>
          Title: {film.Title}{" "}
          <button
            onClick={e => {
              this.props.pridaj(film);
            }}
          >
            Pridať k obľúbeným
          </button>
        </li>
        <li>Year: {film.Year}</li>
        <li>Type: {film.Type}</li>
        <li>
          <img src={film.Poster} alt="poster k filmu" />
        </li>
      </ul>
    );

    return (
      <div className="Detail">
        <h2>Movie detail</h2>
        {detail}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pridaj: x => {
      dispatch(pridaj(x));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
