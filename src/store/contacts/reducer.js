import { contactsActionsTypes } from "./actions";

function requestInitialState() { 
  fetch("https://my-json-server.typicode.com/RomanChasovitin/demo-api/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("contacts", JSON.stringify(data.data));
    });
  return JSON.parse(localStorage.getItem("contacts"));
}

const initialState = {
  contacts: requestInitialState(),
  filter: false,
  sort: true,
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactsActionsTypes.SET_CONTACTS:
      return { ...state, contacts: action.payLoad };
    case contactsActionsTypes.SET_SORT:
      return { ...state, sort: action.sort };
    case contactsActionsTypes.SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
