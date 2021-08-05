export const contactsActionsTypes = {
  SET_CONTACTS: "SET_CONTACTS",
  SET_SORT: "SET_SORT",
  SET_FILTER: "SET_FILTER",
};

export const contactsActions = {
  setContacts: (payLoad) => ({
    type: contactsActionsTypes.SET_CONTACTS,
    payLoad,
  }),
  setSort: (payLoad) => ({
    type: contactsActionsTypes.SET_SORT,
    sort: payLoad,
  }),
  setFilter: (payLoad) => ({
    type: contactsActionsTypes.SET_FILTER,
    filter: payLoad,
  }),
};
