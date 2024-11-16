/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from './Question.module.css';
import { scoreContext } from '../Contexts/scoreContext';

// eslint-disable-next-line react/prop-types
const Question = ({ quizzes }) => {

  // eslint-disable-next-line react/prop-types
  const questions = quizzes.questions;

  const score = useContext(scoreContext)[0];
  const setScore = useContext(scoreContext)[1];

  const [finalAnswer, setFinalAnswer] = useState(null);

  const [page, setPage] = useState(0);

  const width ={
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

  }

  const letters = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  }

  const [selectedAnswer, setSelectedAnswer] =  useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(finalAnswer === questions[page].answer){
      alert('good answer you are really good sympaupe !')
    }
  }

  
 

  return (
    <section className={styles.quizz}>
      <h3 className={styles["quizz__header"]}>Question {page + 1} out of 10</h3>
      <div className={styles["quizz__question-container"]}>
        <h3 className={styles["quizz__question-container__question"]}>
          {questions[page].question}
        </h3>
        <div className={styles["quizz__question-container__decoration"]}>
          <div
            className={styles["quizz__question-container__decoration__inner"]}
            style={{ width: width[page] }}
          ></div>
        </div>
        <form onSubmit={handleSubmit}>
          <ul className={styles["quizz__question-container__answers"]}>
            {questions[page].options.map((option, index) => (
              <li
                key={index}
                value={index}
                title={option}
                onClick={(e)=> {
                  setSelectedAnswer({
                  [e.target.value] : true
                })
                setFinalAnswer(option)
              }
              }
                className={`${styles["quizz__question-container__answers__option"]} ${selectedAnswer[index] ? styles['answer-selected'] : styles['answer-unselected']}`}
              >
                <h3  className={styles["quizz__question-container__answers__option__marker"]} ><span >{letters[index]}</span></h3>
                <h3  >{option}</h3>
              </li>
            ))}
          </ul>
          <div className={styles["quizz__question-container__submit"]}>
            <button className={styles["quizz__question-container__submit__button"]}> Submit answer</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Question
