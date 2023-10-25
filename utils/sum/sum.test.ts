import { sum } from "./sum";
describe("sum", () => {
  it("should sum two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should sum two numbers", () => {
    expect(sum(-0.5, 7.5)).toBe(7);
  });
});
