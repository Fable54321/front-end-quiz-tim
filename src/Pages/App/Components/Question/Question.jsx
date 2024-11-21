/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Question.module.css";
import wrongAnswerIcon from "../../../../images/icon-error.svg";
import goodAnswerIcon from "../../../../images/icon-correct.svg";
import FinalScore from "../FinalScore/FinalScore";

const Question = ({ darkTheme, currentQuizz, currentScore, setCurrentScore, section }) => {
  const questions = currentQuizz.questions;

  const [page, setPage] = useState(0);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const width = {
    0: "3%",
    1: "10%",
    2: "20%",
    3: "30%",
    4: "40%",
    5: "50%",
    6: "60%",
    7: "70%",
    8: "80%",
    9: "90%",
  };

  const letters = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };

  const [selectedAnswer, setSelectedAnswer] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const [finalAnswer, setFinalAnswer] = useState({
    option: null,
    index: null,
  });

  const [isSelectedGood, setIsSelectedGood] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const [noSubmittedAnswer, setNoSubmittedAnswer] = useState(false);

  const [answerCheckSrc, setAnswerCheckSrc] = useState("");

  const handleClick = (index, option) => {
    if (!isSubmitted) {
      {
        setSelectedAnswer({
          0: false,
          1: false,
          2: false,
          3: false,
        });
        setSelectedAnswer((prev) => ({
          ...prev,
          [index]: true,
        }));

        setFinalAnswer({ option, index });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSubmitted && finalAnswer.option) {
      setIsSubmitted(true);

      if (finalAnswer.option === questions[page].answer) {
        setIsSelectedGood((prev) => ({
          ...prev,
          [finalAnswer.index]: true,
        }));
        setAnswerCheckSrc(goodAnswerIcon);
        setCurrentScore((prev) => prev + 1);
      } else {
        setIsSelectedGood((prev) => ({
          ...prev,
          [finalAnswer.index]: "wrong",
        }));
        setAnswerCheckSrc(wrongAnswerIcon);
      }
    } else if (!finalAnswer.option) {
      setNoSubmittedAnswer(true);
    }
  };

  useEffect(() => {
    setIsSubmitted(false);
    setSelectedAnswer({
      0: false,
      1: false,
      2: false,
      3: false,
    });
    setFinalAnswer({
      option: null,
      index: null,
    });
    setIsSelectedGood({
      0: false,
      1: false,
      2: false,
      3: false,
    });
    setAnswerCheckSrc("");
    setNoSubmittedAnswer(false);
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  if (page < 10) {
    return (
      <>
        <section className={styles.quizz}>
          <div className={styles["quizz__header"]}>
           <h3 className={!darkTheme ? "": styles["quizz__header-dark"]} > Question {page + 1} out of 10 </h3>
            <div>
              <h3 className={styles["quizz__header__question"]}>
                {questions[page].question}
              </h3>

              <div
                className={styles["quizz__header__decoration"]}
                data-type="dark"
              >
                <div
                  className={
                    styles["quizz__header__decoration__inner"]
                  }
                  style={{ width: width[page] }}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles["quizz__question-container"]}>
           
            <form onSubmit={handleSubmit}>
              <ul className={styles["quizz__question-container__answers"]}>
                {questions[page].options.map((option, index) => (
                  <li
                    key={index}
                    value={index}
                    title={option}
                    className={`${
                      styles["quizz__question-container__answers__option"]
                    } 
                ${
                  selectedAnswer[index] === true
                    ? styles["answer-selected"]
                    : ""
                }
                ${
                  isSelectedGood[index] === true
                    ? styles["answer-selected-good"]
                    : ""
                }
                ${
                  isSelectedGood[index] === "wrong"
                    ? styles["answer-selected-wrong"]
                    : ""
                }
                `}
                    onClick={() => handleClick(index, option)}
                  >
                    <h3
                      className={`${
                        styles[
                          "quizz__question-container__answers__option__marker"
                        ]
                      }
                   ${
                     isSelectedGood[index] === true ? styles["marker-good"] : ""
                   }
                   ${
                     isSelectedGood[index] === "wrong"
                       ? styles["marker-bad"]
                       : ""
                   }
                `}
                      data-type="dark-color"
                    >
                      <span>{letters[index]}</span>
                    </h3>
                    <h3>{option}</h3>
                    <img
                      src={selectedAnswer[index] ? answerCheckSrc : ""}
                      alt=""
                    />
                    <img
                      src={
                        option === questions[page].answer &&
                        isSubmitted &&
                        !selectedAnswer[index] &&
                        finalAnswer.option
                          ? goodAnswerIcon
                          : ""
                      }
                      alt=""
                    />
                  </li>
                ))}
              </ul>
              <div className={styles["quizz__question-container__submit"]}>
                {isSubmitted && finalAnswer.option ? (
                  <button
                    onClick={() => nextPage()}
                    className={
                      styles["quizz__question-container__submit__button"]
                    }
                  >
                    {" "}
                    Next Question
                  </button>
                ) : (
                  <button
                    className={
                      styles["quizz__question-container__submit__button"]
                    }
                  >
                    {" "}
                    Submit answer
                  </button>
                )}
              </div>
            </form>
            {noSubmittedAnswer && (
              <div className={styles["quizz__question-container__no-answer"]}>
                <img src={wrongAnswerIcon} alt="" aria-hidden="true" />
                <p aria-label="no answer submitted">Please select an answer</p>
              </div>
            )}
          </div>
        </section>
      </>
    );
  } else {
    return (
      <FinalScore
        darkTheme= {darkTheme}
        section={section}
        title={currentQuizz.title}
        currentScore={currentScore}
        setPage={setPage}
      />
    );
  }
};

export default Question;
