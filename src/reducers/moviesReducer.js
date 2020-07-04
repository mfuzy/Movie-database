export const moviesReducer = (
  state = { inp: "", najdene: [], index: "", oblubene: [] },
  action
) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      state = { ...state, inp: action.payload };
      break;
    case "FIND_FULFILLED":
      state = { ...state, najdene: action.payload.data.Search };
      break;
    case "DETAIL":
      state = { ...state, index: action.payload };
      break;

    case "PRIDAJ":
      state = { ...state, oblubene: [...state.oblubene, action.payload] };
      break;

    case "ODOBER":
      const newpole = [...state.oblubene];
      newpole.splice(action.payload, 1);
      state = { ...state, oblubene: newpole };
      break;
  }

  return state;
};
