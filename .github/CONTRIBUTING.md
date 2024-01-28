# Contributing

**The issue tracker is only for bug reports and enhancement suggestions. If you have a question, please ask it in the [Discord server](https://join.favware.tech) instead of opening an issue – you will get redirected there anyway.**

If you wish to contribute to the Favware project's codebase or documentation, feel free to fork the repository and submit a
pull request. We use ESLint to enforce a consistent coding style, any PR that does not follow the linting rules will not be
merged until the formatting is resolved.

## Setup

To get ready to work on the codebase, please do the following:

1. You have to install [bun](https://bun.sh) before contributing to this repository.
1. Fork & clone the repository, and make sure you're on the **main** branch
1. Run `bun install`
1. Code your heart out!
1. Ensure your changes compile (`bun run build`) and run by testing them using GraphQL Playground.

- You can start compiling in watch mode with `bun run watch`
- You can start a dev server with `bun run dev`

5. If you have any substantial code changes make sure these are covered in unit tests
6. Run `bun run lint && bun run test` to run ESLint and ensure all tests pass
7. Submit a pull request
