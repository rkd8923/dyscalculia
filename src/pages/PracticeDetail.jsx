import ProblemLayoutV2 from "components/ProblemLayoutV2";
import TypeDescription from "components/TypeDescription";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setResult } from "store/practice";

export default function PracticeDetail({ history, location }) {
  const dispatch = useDispatch();
  const type = location?.state?.type;
  const [count, setCount] = useState(-1);
  const [isEnd, setIsEnd] = useState(false);
  const [allCount, setAllCount] = useState(1);

  function goToNextProblem() {
    setAllCount((prev) => prev + 1);
    if (count >= 9) {
      history.push({ pathname: "/practice/report", state: { type } });
    } else {
      setCount((prev) => prev + 1);
    }
  }

  function submit(answer, inputAnswer) {
    const result = +answer === +inputAnswer;
    dispatch(setResult(count, result));
  }

  if (isEnd) return <div>isEnd</div>;

  return (
    <>
      {count === -1 ? (
        <TypeDescription
          type={type}
          next={() => setCount((prev) => prev + 1)}
        />
      ) : (
        <ProblemLayoutV2
          type={type}
          count={count}
          next={goToNextProblem}
          allCount={allCount}
          submit={submit}
        />
      )}
    </>
  );
}
