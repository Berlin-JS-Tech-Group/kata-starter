import { multiply } from "./solution";

const func = multiply;
const tests = [
  {
    name: "two positive numbers",
    params: {
      a: 2,
      b: 3,
    },
    result: 6,
  },
  {
    name: "two negative numbers",
    params: {
      a: -5,
      b: -10,
    },
    result: 50,
  },
  {
    name: "one negative number",
    params: {
      a: 2,
      b: -8,
    },
    result: -16,
  },
];

// universal tests runner
describe("kata-multiply tests", () =>
  tests.forEach((test) =>
    it(test.name, () => expect(func(test.params)).toBe(test.result))
  ));
