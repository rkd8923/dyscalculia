import type1_1 from "assets/images/problem/type1/1.png";
import type2_1 from "assets/images/problem/type2/1.png";
import type3_1_1 from "assets/images/problem/type3/1-1.png";
import type3_1_2 from "assets/images/problem/type3/1-2.png";
import type4_1 from "assets/images/problem/type4/1.png";
import type5_1_1 from "assets/images/problem/type5/1-1.png";
import type5_1_2 from "assets/images/problem/type5/1-2.png";
import type6_1 from "assets/images/problem/type6/1.png";
import type7_1 from "assets/images/problem/type7/1.png";
import type8_1 from "assets/images/problem/type8/1.png";
import type9_1 from "assets/images/problem/type9/1.png";

const problems = {
  type1_1,
  type2_1,
  type3_1_1,
  type3_1_2,
  type4_1,
  type5_1_1,
  type5_1_2,
  type6_1,
  type7_1,
  type8_1,
  type9_1,
};
const titles = {
  type1: "How many DOTS are there?",
  type2: "How many blue DOTS are there?",
  type3: "Which one has more dots?",
  type4: "Which number is larger?",
  type5: "How many Dots?",
  type6: "How many Dots?",
  type7: "How many Dots?",
  type8: "How many Dots?",
  type9: "How many groups?",
  type10: "Color the cells to match the fractions",
};
export function getProblemImage(type, idx) {
  return problems[`type${type}_${idx}`];
}
export function getProblemImage2(type, idx, jdx) {
  return problems[`type${type}_${idx}_${jdx}`];
}
export function getProblemTitle(type) {
  return titles[`type${type}`];
}
