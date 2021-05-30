import ProblemLayout from "components/ProblemLayout";
import React, { useEffect, useState } from "react";
import { problemData } from "utils/problemData";

function Exam() {
  const [problem, setProblem] = useState(null);
  const [isEnd, setIsEnd] = useState(false);

  function nextTypeProblem() {
    if (problem?.typeIndex === 9) {
      setIsEnd(true);
    } else {
      setProblem((prev) => ({
        typeIndex: prev.typeIndex + 1,
        data: problemData["type" + (prev.typeIndex + 1)][0],
      }));
    }
  }

  useEffect(() => {
    console.log("END");
  }, [isEnd]);

  useEffect(() => {
    setProblem({
      data: problemData["type1"][0],
      typeIndex: 1,
    });
    return () => {
      setProblem(null);
    };
  }, []);

  if (!problem?.data) return null;

  return <ProblemLayout problem={problem?.data} next={nextTypeProblem} />;
}

export default Exam;
