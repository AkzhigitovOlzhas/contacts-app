import React from "react";
import { Box, Flex } from "rebass";
import { Input } from "@rebass/forms";
function SearchForm() {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Flex alignItems="center" style={{ marginTop: "20px" }}>
        <Input
          style={{ width: "50%" }}
          id="request"
          type="text"
          placeholder="type to search"
        />
        <Box mx="auto" />
        sdfsdffsd
      </Flex>
    </div>
  );
}

export default SearchForm;
