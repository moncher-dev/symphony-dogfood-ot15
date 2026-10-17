# AGENTS.md

Conventions for agents working in this repository.

- Plain ES modules under `src/`, no runtime or dev dependencies.
- Tests live in `test/*.test.js` and use `node:test` with `node:assert/strict`.
- Every exported function has a JSDoc comment and at least one test.
- Validation: `npm run lint` and `npm test` must pass.
- Commits follow Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`).
