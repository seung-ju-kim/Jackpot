/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, LinearProgress, Link } from "@mui/material";
import * as Api from "../../api";
import "../../scss/Mbti.scss";

import checkState from "./TypeData";

function ResultESFJ() {
  const typeName = "ESFJ";
  return (
    <div className="introduction">
      <Box sx={{ mt: 25 }}>
        <Grid container>
          <Grid item xs={3} height="720px"></Grid>
          <Grid item xs={6} sx={{ backgroundColor: "blue" }}>
            <Grid container mb={2} sx={{ border: "3px solid gray" }}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  <p style={{ textAlign: "center" }}>당신은 {typeName}</p>
                  <p style={{ textAlign: "center" }}>
                    추천 칵테일은 {checkState.types[typeName]}
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <img
                      className=""
                      src={checkState.typeImgs[typeName]}
                      alt=""
                      width="350px"
                      style={{
                        borderRadius: "1rem",
                        justifyContent: "center",
                      }}
                    />
                  </div>
                  <p style={{ margin: "5px", textAlign: "center" }}>
                    {checkState.typeInfos[typeName]}
                  </p>
                </div>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid container>
                <Grid item xs={5.95}>
                  <p
                    style={{
                      margin: "5px",
                      textAlign: "center",
                      fontSize: "30px",
                      color: "white",
                    }}
                  >
                    궁합이 좋은 MBTI 칵테일
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <img
                      className=""
                      src={checkState.typeImgs[typeName]}
                      alt=""
                      width="150px"
                      style={{
                        borderRadius: "1rem",
                        justifyContent: "center",
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={0.1} sx={{ backgroundColor: "gray" }}></Grid>
                <Grid item xs={5.95}>
                  <p
                    style={{
                      margin: "5px",
                      textAlign: "center",
                      fontSize: "30px",
                      color: "white",
                    }}
                  >
                    궁합이 별로인 MBTI 칵테일
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <img
                      className=""
                      src={checkState.typeImgs[typeName]}
                      alt=""
                      width="150px"
                      style={{
                        borderRadius: "1rem",
                        justifyContent: "center",
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ height: "20px" }}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default ResultESFJ;
