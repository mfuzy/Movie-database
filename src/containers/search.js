import React from "react";
import "./search.css";
import { connect } from "react-redux";
import { inp, find, detail } from "../actions/moviesActions";
import { Link } from "react-router-dom";

class Search extends React.Component {
  render() {
    const inp = this.props.movies.inp;
    const najdene = this.props.movies.najdene;

    let filmy;

    if (najdene) {
      filmy = (
        <ul>
          {najdene.map((i, k) => {
            return (
              <li key={k}>
                <Link
                  className="link-najdene"
                  to="/detail"
                  id={k}
                  onClick={e => {
                    this.props.detail(e);
                  }}
                >
                  {i.Title}
                </Link>
              </li>
            );
          })}
        </ul>
      );
    } else {
      filmy = <p>Film sa nenašiel</p>;
    }

    return (
      <div className="Search">
        <h2>Movies search</h2>
        <input
          type="text"
          value={inp}
          onChange={e => {
            this.props.inpChange(e);
          }}
        />{" "}
        <button
          type="button"
          onClick={e => {
            this.props.find(inp);
          }}
        >
          Find
        </button>
        <br />
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
    inpChange: e => {
      dispatch(inp(e.target.value));
    },
    find: x => {
      dispatch(find(x));
    },
    detail: e => {
      dispatch(detail(e.target.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
