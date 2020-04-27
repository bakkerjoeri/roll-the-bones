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
