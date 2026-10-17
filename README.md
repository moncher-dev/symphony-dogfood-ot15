# symphony-dogfood-ot15

Isolated supervised dogfood target for [github-symphony](https://github.com/hojinzs/github-symphony)
OT-15 delivery evidence ([hojinzs/github-symphony#1077](https://github.com/hojinzs/github-symphony/issues/1077)).

Work is dispatched by a GitHub Symphony daemon from the
[Symphony Dogfood OT-15](https://github.com/users/moncher-dev/projects/7) Project.
`WORKFLOW.md` in this repository is the exact policy the daemon runs.

## Usage

```js
import { slugify, truncate } from "./src/strings.js";

slugify("Hello World"); // "hello-world"
truncate("Hello World", 6); // "Hello…"
```

## Development

```bash
npm run lint
npm test
```
