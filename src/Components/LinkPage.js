import React from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function LinkPage() {
  const pages = ["Home", "Add TODO"];
  return (
    <>
      {" "}
      <Link to="/lists">
        <Button
          sx={{
            my: 2,
            color: "white",
          }}
        >
          {pages[0]}
        </Button>
      </Link>
      <Link to="/">
        {" "}
        <Button sx={{ my: 2, color: "white" }}>{pages[1]}</Button>
      </Link>
    </>
  );
}

export default LinkPage;
