import React from "react";
import { Flex, Text } from "rebass";

function Header() {
  return (
    <Flex px={3} color="white" bg="black" alignItems="center">
      <Text p={3} fontWeight="bold" fontSize={4}>
        MyContacts
      </Text>
    </Flex>
  );
}

export default Header;
