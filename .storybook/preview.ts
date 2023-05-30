import type { Preview } from "@storybook/react";
import { CSSTogglerParameters } from "../src/types";
// @ts-expect-error
import blue from "../css/blue.css?inline";
// @ts-expect-error
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
    } satisfies CSSTogglerParameters,
  },
};

export default preview;
