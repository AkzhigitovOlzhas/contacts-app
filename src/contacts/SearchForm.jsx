import React from "react";
import { Box, Flex } from "rebass";
import { Input } from "@rebass/forms";
import { useDispatch, useSelector } from "react-redux";
import { contactsActions } from "../store/contacts/actions";

function SearchForm() {
  const { sort, filter } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  function handleFilterClick() {
    dispatch(contactsActions.setFilter(!filter));
  }
  function handleSortDescClick() {
    dispatch(contactsActions.setSort(true));
  }
  function handleSortAscClick() {
    dispatch(contactsActions.setSort(false));
  }

  function handleSearch(event) {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (event.target.value) {
      let newContacts = [];
      for (const contact of contacts) {
        if (
          (contact.firstName + contact.lastName)
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        ) {
          newContacts.push(contact);
        }
      }
      dispatch(contactsActions.setContacts(newContacts));
    } else {
      dispatch(contactsActions.setContacts(contacts));
    }
  }
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Flex alignItems="center" style={{ marginTop: "20px" }}>
        <Input
          style={{ width: "50%" }}
          id="request"
          type="text"
          placeholder="type to search"
          onChange={handleSearch}
        />
        <Box mx="auto" />
        {
          <img
            src={filter ? "./img/icons/heart2.png" : "./img/icons/heart1.png"}
            alt=""
            style={{ width: "35px", cursor: "pointer" }}
            onClick={() => handleFilterClick()}
          />
        }
        <img
          src={sort ? "./img/icons/sort3.png" : "./img/icons/sort1.png"}
          alt=""
          style={{ width: "35px", marginLeft: "10px", cursor: "pointer" }}
          onClick={() => handleSortDescClick()}
        />
        <img
          src={sort ? "./img/icons/sort2.png" : "./img/icons/sort4.png"}
          alt=""
          style={{ width: "35px", marginLeft: "10px", cursor: "pointer" }}
          onClick={() => handleSortAscClick()}
        />
      </Flex>
    </div>
  );
}

export default SearchForm;
