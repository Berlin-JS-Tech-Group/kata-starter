import { binary_search } from "./binary";
import { binary_recursive } from "./binary_recursive";

describe("binary search tests", () => {
    it("returns found element's index", () => {
        const arr = [1,2,3,4,5,7,8];
        const result = binary_recursive(2, arr, 0, arr.length - 1);
        expect(result).toBe(1);
    });

    it("returns found element's index-2", () => {
        const arr = [1,3,5,7,9,11,13,15,17];
        const result = binary_recursive(15, arr, 0, arr.length - 1);
        expect(result).toBe(7);
    });

    it("returns found element's index", () => {
        const arr = [-11,-4,0,7,9,11,13,15,17];
        const result = binary_recursive(0, arr, 0, arr.length - 1);
        expect(result).toBe(2);
    });

    it("one element case", () => {
        const arr = [1];
        const result = binary_recursive(1, arr, 0, arr.length - 1);
        expect(result).toBe(0);
    });

    it("zero element case", () => {
        const arr = [];
        const result = binary_recursive(1, arr, 0, arr.length - 1);
        expect(result).toBe(undefined);
    });
})