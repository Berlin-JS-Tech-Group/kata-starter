import { binary_search } from "./binary";

describe("binary search tests", () => {
    it("returns found element's index", () => {
        const arr = [1,2,3,4,5,7,8];
        const result = binary_search(4, arr);
        expect(result).toBe(3);
    });

    it("one element case", () => {
        const arr = [1];
        const result = binary_search(1, arr);
        expect(result).toBe(0);
    });

    it("zero element case", () => {
        const arr = [];
        const result = binary_search(1, arr);
        expect(result).toBe(undefined);
    });
})