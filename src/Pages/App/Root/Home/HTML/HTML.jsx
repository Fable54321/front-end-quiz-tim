import { useContext, useEffect } from "react"
import Question from "../../../../../Components/Question"
import { quizzContext } from "../../../../../Contexts/quizzContext"
import { sectionContext } from "../../../../../Contexts/sectionContext";



const Html = () => {




  const htmlQuizzes = useContext(quizzContext)[0];

  const section = useContext(sectionContext)[0];
  const setSection = useContext(sectionContext)[1];

  console.log(htmlQuizzes);

  useEffect(() => {
    setSection(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  return (
    <div>
      <Question section={section} quizzes={htmlQuizzes}  />
    </div>
  )
}

export default Html