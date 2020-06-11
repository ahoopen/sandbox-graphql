# Sandbox

> Workshop

## Pre-requisites

-   `yarn`, with node10 or node12
-   editor plugins: [vscode prisma graphql plugin](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql), or [jetbrains](https://plugins.jetbrains.com/plugin/8097-js-graphql) (optional)

## File structure

-   [graphql server](./pages/api/graphql/index.ts) with resolver and schema
-   [page](./pages/index.tsx)
-   [simple component](./modules/simple/simple.tsx)
-   [apollo client](./lib/apollo.tsx)

## Development

-   `yarn dev`, after it runs in other proces run `yarn test:watch`
-   goto [http://localhost:3000/](http://localhost:3000/) (playground at [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql))

## Workshop

[here](./internals/wiki/index.md)
