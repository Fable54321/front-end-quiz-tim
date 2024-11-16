import { Outlet } from "react-router-dom";
import { quizzContext } from "./quizzContext";
import { sectionContext } from "./sectionContext";
import { scoreContext } from "./scoreContext";

// eslint-disable-next-line react/prop-types
const ContextLayout = ({ quizzes, section, setSection, score, setScore }) => {



    return (
      <sectionContext.Provider value={[section, setSection]}>
        <quizzContext.Provider value={quizzes}>
          <scoreContext.Provider value={[score, setScore]}>
            <Outlet />
          </scoreContext.Provider>
        </quizzContext.Provider>
      </sectionContext.Provider>
    );
};

export default ContextLayout;