import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import Button from "../Button/Button";

export default {
  title: "COMPONENTS/Buttons",
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            Use any of the available button style types to quickly create a
            styled button. Just modify the variant prop.
          </Subtitle>
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

export const Default: ComponentStory<typeof Button> = () => (
  <Button variant="secondary" size="md">
    Dark
  </Button>
);
