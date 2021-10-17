const SET_RESULT = "test/SET_RESULT";
const SET_INIT = "test/SET_INIT";

export const setResult = (type, index, result) => ({
  type: SET_RESULT,
  payload: { type, index, result },
});
export const setInit = () => ({ type: SET_INIT });

const initialState = {
  count: 0,
  result: {
    type1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    type2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    type3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    type4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      const { type, index, result } = action.payload;

      if (result) {
        const temp = state.result[type].slice();
        temp[index] += 1;
        return {
          count: state.count + 1,
          result: {
            ...state.result,
            [type]: temp,
          },
        };
      }
      return { ...state };
    case SET_INIT:
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default test;
