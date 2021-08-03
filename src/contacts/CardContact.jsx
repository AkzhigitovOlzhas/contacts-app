import React from "react";
import { Box, Flex, Text } from "rebass";

function CardContact() {
  return (
    <div
      style={{
        boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
        paddingBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        alt=""
        style={{ width: "100%" }}
      />
      <Box px={3}>
        <Flex sx={{ width: "100%", justifyContent: "space-between" }}>
          <Text>Vanessa Fahrmann</Text>
          <img src="./img/icons/heart 2.png" alt="" />
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
            Bishkek city, Kyrgyzstan
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
            +996 550 002 232
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
            mysite.com
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
            web@mysite.com
          </div>
        </div>
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
      </Box>
    </div>
  );
}

export default CardContact;
