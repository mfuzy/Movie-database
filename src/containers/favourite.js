import React from "react";
import "./favourite.css";
import { connect } from "react-redux";
import { odober } from "../actions/moviesActions";

class Favourite extends React.Component {
  render() {
    const oblubene = this.props.movies.oblubene;
    let filmy = <p>Zatiaľ nemáš žiadny obľúbený film</p>;

    if (oblubene.length > 0) {
      filmy = (
        <ul>
          {oblubene.map((i, k) => (
            <li key={k}>
              {i.Title}{" "}
              <button id={k} onClick={this.props.odober}>
                Odobrať
              </button>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="Favourite">
        <h2>Favourite films</h2>
        {filmy}
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
    odober: e => {
      dispatch(odober(e.target.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourite);
