import { getRandomNumberInRange } from "./getRandomNumberInRange.js";
export function roll(sides, amount = 1) {
    let total = 0;
    for (let rolls = 0; rolls < amount; rolls += 1) {
        total += getRandomNumberInRange(1, sides);
    }
    return total;
}
;
