const SET_RESULT = "exam/SET_RESULT";
const SET_INIT = "exam/SET_INIT";

export const setResult = (type, result) => ({
  type: SET_RESULT,
  payload: { type, result },
});
export const setInit = () => ({ type: SET_INIT });

const initialState = {
  count: 0,
  result: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const exam = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      const { type, result } = action.payload;
      const index = type - 1;
      if (result) {
        const temp = state.result.slice();
        temp[index] += 1;
        return {
          count: state.count + 1,
          result: [...temp],
        };
      }
      return { ...state };
    case SET_INIT:
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default exam;
