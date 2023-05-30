# Storybook Addon css-toggler

Allows you to toggle css files on the storybook preview iframe.

## How to use

Install the addon:

```sh
yarn add -D storybook-addon-css-toggler
```

Add your configuration to the preview.ts file:

```ts
import type { Preview } from "@storybook/react";
import blue from "../css/blue.css?inline";
import red from "../css/red.css?inline";

const preview: Preview = {
    parameters: {
        cssToggler: {
            stylesheets: [
                {
                    id: "red",
                    title: "Red",
                    content: red,
                },
                {
                    id: "blue",
                    title: "Blue",
                    content: blue,
                },
            ],
        },
    },
};
```

Add the addon to the storybook main.ts file:

```ts
...
addons: [
    "storybook-addon-css-toggler",
  ],
...
