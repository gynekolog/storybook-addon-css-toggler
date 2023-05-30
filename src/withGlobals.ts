import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
import { useEffect, useGlobals, useParameter } from "@storybook/preview-api";
import { PARAM_KEY } from "./constants";
import { CSSTogglerParameters } from "./types";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  const [globals] = useGlobals();
  const selectedStylesheetId = globals[PARAM_KEY];

  const { stylesheets = [] } = useParameter<CSSTogglerParameters>(PARAM_KEY, {
    stylesheets: [],
  });

  const activeStylesheet = stylesheets.find(
    (stylesheet) => stylesheet.id === selectedStylesheetId
  );

  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";
  const { theme } = context.globals;

  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selector = isInDocs
      ? `#anchor--${context.id} .sb-story`
      : "#storybook-root";

    renderStylesheet(selector, activeStylesheet);
  }, [selectedStylesheetId, theme]);

  return StoryFn();
};

function renderStylesheet(
  selector: string,
  styleSheetItem: CSSTogglerParameters["stylesheets"][number]
) {
  const headEl = document.querySelector("head");
  let stylesheetEl = document.querySelector("style#css-toggler");

  if (!stylesheetEl) {
    stylesheetEl = document.createElement("style");
    stylesheetEl.setAttribute("id", "css-toggler");
    headEl.appendChild(stylesheetEl);
  }

  stylesheetEl.textContent = styleSheetItem.content;
}
