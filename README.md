# Storybook Addon css-toggler

Allows you to toggle css files on the storybook preview iframe.

## How to use

Install the addon:

```sh
yarn add -D storybook-addon-css-toggler
```

Then add this line to your `addons.js` file (create this file inside your storybook config directory if needed).

```js


import 'storybook-addon-css-toggler/register';
```

Then add your configuration to the preview.ts file:

```js
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
