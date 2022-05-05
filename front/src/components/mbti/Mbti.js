import React, { useState } from "react";
import { Grid } from "@mui/material";
import MbtiMain from "./MbtiMain";

function Mbti() {
  return (
    <Grid container className="mbti">
      <Grid item xs={12} sx={{ mt: "20vh" }}>
        <MbtiMain></MbtiMain>
      </Grid>
    </Grid>
  );
}

export default Mbti;
