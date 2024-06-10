import {Sum} from "../Sum";

test("Sum function should calculate the sum of two numbers", () => {
    const result = Sum(4, 3);

    //Assersion
    expect(result).toBe(7);
});