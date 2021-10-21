const SET_RESULT = "practice/SET_RESULT";
const SET_INIT = "practice/SET_INIT";
const SET_TIME = "practice/SET_TIME";

export const setResult = (index, result) => ({
  type: SET_RESULT,
  payload: { index, result },
});
export const setInit = () => ({ type: SET_INIT });
export const setTime = (time) => ({
  type: SET_TIME,
  payload: { time },
});

const initialState = {
  count: 0,
  result: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const practice = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT: {
      const { index, result } = action.payload;

      if (result) {
        const temp = state.result.slice();
        console.log(1, temp);
        temp[index] += 1;
        console.log(2, temp);
        return {
          count: state.count + 1,
          result: [...temp],
        };
      }
      return { ...state };
    }
    case SET_INIT: {
      return { ...initialState };
    }
    case SET_TIME: {
      const { time } = action.payload;
      return { ...state, time: time };
    }
    default:
      return { ...state };
  }
};

export default practice;
