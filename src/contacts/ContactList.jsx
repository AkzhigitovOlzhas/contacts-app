import React from "react";
import { useSelector } from "react-redux";
import { Box } from "rebass";
import CardContact from "./CardContact";

function Contacts() {
  const { contacts, sort, filter } = useSelector((state) => state.contacts);
  function sortContacts(arr) {
    let contacts; 
    if (!sort) {
      contacts = arr.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return 1;
        }
        if (a.firstName > b.firstName) {
          return -1;
        }
        return 0;
      });
    } else {
      contacts = arr.sort((a, b) => {
        if (a.firstName > b.firstName) {
          return 1;
        }
        if (a.firstName < b.firstName) {
          return -1;
        }
        return 0;
      });
    }
    if (filter) {
      contacts = arr.filter((contact) => contact.like);
    }
    return contacts;
  }

  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <Box
          style={{ marginTop: "20px" }}
          sx={{
            display: "grid",
            gridGap: 4,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            justifyItems: "center",
          }}
        >
          {contacts !== null
            ? sortContacts(contacts).map((contact) => (
                <CardContact key={contact.id} data={contact} id={contact.id} />
              ))
            : null}
        </Box>
      </div>
    </>
  );
}

export default Contacts;
