import { expect, test } from "bun:test";
import { main } from "./part1";

test("part1", () => {
  const result = main(`1abc2
  pqr3stu8vwx
  a1b2c3d4e5f
  treb7uchet`);
  expect(result).toBe(142);
});
