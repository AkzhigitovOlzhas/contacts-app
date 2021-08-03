import React from "react";
import { Box } from "rebass";
import CardContact from "./CardContact";

function Contacts() {
  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <Box
          style={{ marginTop: "20px" }}
          sx={{
            display: "grid",
            gridGap: 4,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
          <CardContact />
        </Box>
      </div>
    </>
  );
}

export default Contacts;
