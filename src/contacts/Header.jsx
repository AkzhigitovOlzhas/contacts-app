import React from "react";
import { Flex, Text } from "rebass";

function Header() {
  return (
    <Flex px={3} color="white" bg="black" alignItems="center">
      <Text
        p={3}
        fontWeight="bold"
        fontSize={4}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src="./img/icons/Group.png"
          alt=""
          style={{ width: "30px", marginRight: "6px" }}
        />
        MyContacts
      </Text>
    </Flex>
  );
}

export default Header;
