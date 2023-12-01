import { describe, expect, test } from "bun:test";
import { main } from "./part2";

describe('part2', () => {
    test("should return 29", () => {
        const result = main(`two1nine`);
        expect(result).toBe(29);
    });
    test("should return 83", () => {
        const result = main(`eightwothree`);
        expect(result).toBe(83);
    });
    test("should return 13", () => {
        const result = main(`abcone2threexyz`);
        expect(result).toBe(13);
    });
    test("should return 24", () => {
        const result = main(`xtwone3four`);
        expect(result).toBe(24);
    });
    test("should return 42", () => {
        const result = main(`4nineeightseven2`);
        expect(result).toBe(42);
    });
    test("should return 14", () => {
        const result = main(`zoneight234`);
        expect(result).toBe(14);
    });
    test("should return 76", () => {
        const result = main(`7pqrstsixteen`);
        expect(result).toBe(76);
    });
    test("should return 35", () => {
        const result = main(`bdgxxxssthree4vfqzlvdk5`);
        expect(result).toBe(35);
    });
    test("should return 11", () => {
        const result = main(`01`);
        expect(result).toBe(11);
    });

    test('should return 281', () => {
        const result = main(`two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen`)
        expect(result).toBe(281);
    })
});
