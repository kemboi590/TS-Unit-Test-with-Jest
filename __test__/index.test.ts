import { sum } from "../src/index";

test("it works", () => {
  console.log("it works");
});

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});
