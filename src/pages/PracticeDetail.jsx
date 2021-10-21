import ProblemLayoutV2 from "components/ProblemLayoutV2";
import TypeDescription from "components/TypeDescription";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useStopwatch } from "react-timer-hook";
import { setResult, setTime } from "store/practice";

export default function PracticeDetail({ history, location }) {
  const dispatch = useDispatch();
  const { seconds, start, pause, reset } = useStopwatch({
    autoStart: false,
  });
  const type = location?.state?.type;
  const [count, setCount] = useState(-1);
  const [allCount, setAllCount] = useState(1);

  useEffect(() => {
    if (count === 0) {
      reset();
      start();
    }
  }, [count]);

  function goToNextProblem() {
    setAllCount((prev) => prev + 1);
    if (count >= 9) {
      pause();
      dispatch(setTime(seconds));
      history.push({ pathname: "/practice/report", state: { type } });
    } else {
      setCount((prev) => prev + 1);
    }
  }

  function submit(answer, inputAnswer) {
    const result = +answer === +inputAnswer;
    dispatch(setResult(count, result));
  }

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
          time={seconds}
        />
      )}
    </>
  );
}
