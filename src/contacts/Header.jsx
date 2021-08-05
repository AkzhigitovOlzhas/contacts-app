import React from "react";
import { Flex, Link } from "rebass";

function Header() {
  return (
    <Flex px={3} color="white" bg="black" alignItems="center">
      <Link
        p={3}
        fontWeight="bold"
        fontSize={4}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          textDecoration: "none",
          color: "#fff",
        }}
        href="/"
      >
        <img
          src="./img/icons/Group.png"
          alt=""
          style={{ width: "30px", marginRight: "6px" }}
        />
        MyContacts
      </Link>
    </Flex>
  );
}

export default Header;
