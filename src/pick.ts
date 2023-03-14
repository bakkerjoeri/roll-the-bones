import { choose } from "./choose.js";

export function pick<TypeOfItem>(
    items: TypeOfItem[],
    amount: number,
    putBack = false
): TypeOfItem[] {
    if (!putBack && amount > items.length) {
        throw new Error(`Can't randomly pick ${amount} items without putting them back from an array that's only ${items.length} long.`)
    }

    const picks: TypeOfItem[] = [];

	for (let i = 0; i < amount; i += 1) {
        const choice = choose(items);
        picks.push(choice);

        if (!putBack) {
            items = items.filter(item => item !== choice);
        }
    }

    return picks;
}
