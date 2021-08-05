import React from "react";
import { useDispatch } from "react-redux";
import { Box, Flex, Text } from "rebass";
import { contactsActions } from "../store/contacts/actions";

function CardContact(props) {
  const dispatch = useDispatch();
  function handleClick(id) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    for (const contact of contacts) {
      if (contact.id === id) {
        if (contact.like) {
          contact.like = false;
        } else {
          contact.like = true;
        }
      }
    }
    localStorage.setItem("contacts", JSON.stringify(contacts));
    dispatch(contactsActions.setContacts(contacts));
  }

  return (
    <div
      style={{
        boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
        paddingBottom: "10px",
        borderRadius: "10px",
        maxWidth: "300px",
      }}
    >
      <img src={props.data.image} alt="" style={{ width: "100%" }} />
      <Box px={3}>
        <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
          <Text>
            {props.data.firstName} {props.data.lastName}
          </Text>
          <img
            src={
              props.data.like
                ? "./img/icons/heart2.png"
                : "./img/icons/heart1.png"
            }
            alt=""
            style={{ width: "25px", cursor: "pointer" }}
            onClick={() => handleClick(props.id)}
          />
        </Flex>
        <div style={{ marginTop: "10px", lineHeight: "24px" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="./img/icons/location.png"
              alt=""
              style={{ marginRight: "5px" }}
            />
            {props.data.city} city, {props.data.country}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="./img/icons/smartphone.png"
              alt=""
              style={{ marginRight: "5px" }}
            />
            {props.data.phoneNumber}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="./img/icons/internet.png"
              alt=""
              style={{ marginRight: "5px" }}
            />
            {props.data.website}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="./img/icons/email.png"
              alt=""
              style={{ marginRight: "5px" }}
            />
            {props.data.email}
          </div>
        </div>
        <a
          href={`/contact-form/${props.id}`}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              cursor: "pointer",
              padding: "10px ",
              marginTop: "10px",
              background: "black",
              color: "white",
              textAlign: "center",
            }}
          >
            Show
          </div>
        </a>
      </Box>
    </div>
  );
}

export default CardContact;
