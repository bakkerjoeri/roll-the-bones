# 🎲 Roll the bones

Helper functions for randomization.

## Installation

```bash
npm install roll-the-bones
```

## Usage

### `getRandomNumberInRange`

Returns a random number between a lower and an upper bound.

```ts
function getRandomNumberInRange(lowerBound: number, upperBound: number): number
```

```ts
import { getRandomNumberInRange } from 'roll-the-bones';

const betweenOneAndTen = getRandomNumberInRange(1, 10); // => 7
```

### `choose`

Chooses a random item from an array.

```ts
function choose<TypeOfItem>(choices: TypeOfItem[]): TypeOfItem
```

```ts
import { choose } from 'roll-the-bones';

const randomColor = choose(['red', 'green', 'blue']); // => 'green'
```

### `pick`

Pick a few items from an array at random.

```ts
function pick<TypeOfItem>(items: TypeOfItem[], amount: number, putBack = false): TypeOfItem[]
```

```ts
import { pick } from 'roll-the-bones';

const flavours = pick(['vanilla', 'chocolate', 'strawberry'], 2); // => ['strawberry', 'vanilla']
```

By default an item is removed from the available options after being picked, but you can make sure it is put back and available to pick again if you set `putBack` to `true`.

```ts
const flavours = pick(['vanilla', 'chocolate', 'strawberry'], 3, true); // => ['chocolate', 'vanilla', 'chocolate']
```

### `roll`

Rolls one or more dice with a given amount of sides and returns the total. Amount of dice defaults to 1.

```ts
function roll(sides: number, amount?: number = 1): number
```

```ts
import { roll } from 'roll-the-bones';

// The following rolls 2d6
const result = roll(6, 2); // => 9
const result = roll(6, 2); // => 3
const result = roll(6, 2); // => 12
```
