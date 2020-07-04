import axios from "axios";

export const inp = x => {
  return {
    type: "INPUT_CHANGE",
    payload: x
  };
};

export const find = x => {
  return {
    type: "FIND",
    payload: axios.get("http://www.omdbapi.com/?apikey=817dd29&s=" + x)
  };
};

export const detail = x => {
  return {
    type: "DETAIL",
    payload: x
  };
};

export const pridaj = x => {
  return {
    type: "PRIDAJ",
    payload: x
  };
};

export const odober = x => {
  return {
    type: "ODOBER",
    payload: x
  };
};
