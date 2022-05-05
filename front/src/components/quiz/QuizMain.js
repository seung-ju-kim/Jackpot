/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { Box, Grid, LinearProgress, Button, Typography } from "@mui/material";
import "../../scss/Quiz.scss";

import Question from "./Question";
import QuestionImg from "./QuestionImg";
import Answer from "./Answer";
import Correct from "./Correct";
import OxTable from "./OxTable";
import state from "./QuizData";

import bgImg from "../../imgs/bgImg.jpg";
import quizresult from "../../imgs/quizresult.jpg";

function QuizMain(props) {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  const [clickedAnswer, setClickedAnswer] = useState(0);
  const [disable, setDisable] = useState(false);
  const [ox, setOx] = useState("");
  // const [marking, setMarking] = useState("");
  const whiteBarStyle = {
    backgroundColor: "white",
    height: "3px",
    borderRadius: "5px",
  };
  const progress = {
    py: 5,
    px: 5,
    mx: 5,
    mb: 5,
    borderRadius: "1rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const result = {
    py: 10,
    px: 5,
    mb: 10,
    borderRadius: "1rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${quizresult})`,
    backgroundSize: "cover",
  };
  const progressBarAlignCenter = { display: "flex", alignItems: "center" };

  const progressBarStyle = {
    backgroundColor: "rgba(128, 128, 128, 0.8)",
  };
  const percentStyle = {
    color: "white",
    textAlign: "left",
    paddingLeft: "15px",
    fontWeight: "bold",
    fontSize: "20px",
  };

  // the method that checks the correct answer
  const checkAnswer = (answer) => {
    if (answer === state.correctAnswers[step]) {
      setScore(score + 10);
      setClickedAnswer(answer);
      setOx(ox + "O");
    } else {
      setClickedAnswer(answer);
      setOx(ox + "X");
    }
    // setMarking(marking + answer);
    setStep(step + 1);
    setClickedAnswer(0);
  };

  return (
    <>
      {step <= Object.keys(state.questions).length && disable === false ? (
        <Grid container xs={12} sx={progress}>
          <Question question={state.questions[step]} />
          <Grid container sx={{ mb: 3 }}>
            {/* progress bar */}
            <Grid item xs={11} sx={progressBarAlignCenter}>
              <Box sx={{ width: "100%" }}>
                <LinearProgress
                  sx={progressBarStyle}
                  variant="determinate"
                  value={step * 10}
                />
              </Box>
            </Grid>
            <Grid item xs={1} sx={percentStyle}>
              {step * 10}%
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {state.imgs[step] && (
              <Grid item xs sx={{ mx: "auto" }}>
                <QuestionImg img={state.imgs[step]} />
              </Grid>
            )}
            <Grid item xs sx={{ ml: 10 }}>
              <Answer
                answer={state.answers[step]}
                step={step}
                checkAnswer={checkAnswer}
                clickedAnswer={clickedAnswer}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        // result part
        <Grid item xs={12} sx={result}>
          <Grid container>
            <Box
              sx={{
                border: "3px solid white",
                pt: 5,
                pb: 1,
                px: 5,
                mx: "auto",
                maxWidth: "500px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  "&:hover": { color: "#ff3897", cursor: "default" },
                }}
              >
                SCORE : {score}
              </Typography>
              {/* <p>MARKING : {marking}</p> */}
              {/* O/X table */}
              <OxTable
                ox={ox}
                setStep={setStep}
                setDisable={setDisable}
              ></OxTable>
              <Button
                sx={{
                  color: "white",
                  mt: 1,
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "rgba(128, 128, 128, 0.5)" },
                }}
                onClick={() => {
                  location.reload();
                }}
              >
                RESTART
              </Button>
            </Box>
          </Grid>

          {disable === true ? (
            // 정답지
            <>
              <Question question={state.questions[step]} />
              <Grid container sx={{ mb: 3 }}>
                <Grid
                  item
                  xs={12}
                  //white bar
                  sx={whiteBarStyle}
                ></Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs sx={{ ml: 10 }}>
                  <Correct
                    answer={state.answers[step]}
                    step={step}
                    correctAnswer={state.correctAnswers[step]}
                  />
                </Grid>
                <Grid item xs sx={{ mx: "auto" }}>
                  <QuestionImg img={state.imgs[step]} />
                </Grid>
              </Grid>
            </>
          ) : (
            <Typography variant="body1" sx={{ color: "white", mt: 3 }}>
              문제 번호를 눌려 정답을 확인해보세요.
            </Typography>
          )}
        </Grid>
      )}
    </>
  );
}
export default QuizMain;
