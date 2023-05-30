import React, { ComponentProps, memo, useCallback } from "react";
import { useGlobals, useParameter } from "@storybook/manager-api";
import {
  IconButton,
  Icons,
  TooltipLinkList,
  WithTooltip,
} from "@storybook/components";
import { PARAM_KEY, TOOL_ID } from "./constants";
import { CSSTogglerParameters } from "./types";

export const Tool = memo(function CSSTogglerSelector() {
  const [globals, updateGlobals] = useGlobals();

  const { stylesheets = [] } = useParameter<CSSTogglerParameters>(PARAM_KEY, {
    stylesheets: [],
  });

  const selectedStylesheetId = globals[PARAM_KEY] as string;

  const isAnyStylesheetActive = !!stylesheets.find(
    (i) => i.id === selectedStylesheetId
  );

  const updateSelectedStylesheet = useCallback(
    (id: string) => updateGlobals({ [PARAM_KEY]: id }),
    [selectedStylesheetId]
  );

  if (stylesheets.length < 1) {
    return null;
  }

  if (stylesheets.length && !selectedStylesheetId) {
    updateSelectedStylesheet(stylesheets[0].id);
  }

  const links = stylesheets.map((i) => {
    return {
      ...i,
      onClick: () => updateSelectedStylesheet(i.id),
      active: i.id === selectedStylesheetId,
    };
  }) satisfies ComponentProps<typeof TooltipLinkList>["links"];

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={<TooltipLinkList links={links} />}
      closeOnOutsideClick
    >
      <IconButton
        key={TOOL_ID}
        active={isAnyStylesheetActive}
        title="Toggle CSS"
      >
        <Icons icon="paintbrush" />
      </IconButton>
    </WithTooltip>
  );
});
