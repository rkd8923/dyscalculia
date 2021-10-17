import ProblemLayoutV2 from "components/ProblemLayoutV2";
import TypeDescription from "components/TypeDescription";
import React, { useState } from "react";
/*
  type1, ... , type4
*/
export default function Test({ history }) {
  const typeList = ["type1", "type2", "type3", "type4"];
  const [type, setType] = useState(0);
  const [count, setCount] = useState(-1);
  const [isEnd, setIsEnd] = useState(false);

  function goToNextProblem() {
    if (count >= 9 && type >= 3) {
      setIsEnd(true);
    } else if (count >= 9) {
      setType((prev) => prev + 1);
      setCount(-1);
    } else {
      setCount((prev) => prev + 1);
    }
  }

  if (isEnd) return <div>isEnd</div>;

  return (
    <>
      {count === -1 ? (
        <TypeDescription
          type={typeList[type]}
          next={() => setCount((prev) => prev + 1)}
        />
      ) : (
        <ProblemLayoutV2
          type={typeList[type]}
          count={count}
          next={goToNextProblem}
        />
      )}
    </>
  );
}
