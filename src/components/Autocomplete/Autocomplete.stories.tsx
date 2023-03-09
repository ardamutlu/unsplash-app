import React, { useState } from "react";
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
import _map from "lodash/map";
import Autocomplete, { Field } from "./Autocomplete";
import Button from "../Button/Button";

export default {
  title: "COMPONENTS/Autocomplete",
  component: Autocomplete,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Combobox (Autocomplete)</Title>
          <Subtitle>
            Comboboxes are the foundation of accessible autocompletes and
            command palettes for your app, complete with robust support for
            keyboard navigation.
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

const DATA = [
  {
    query: "animal",
    priority: 54801,
  },
  {
    query: "animal face",
    priority: 2726,
  },
  {
    query: "animal eye",
    priority: 2442,
  },
  {
    query: "animal grande",
    priority: 2310,
  },
  {
    query: "animal looking",
    priority: 2271,
  },
];

export const Default: ComponentStory<typeof Autocomplete> = () => {
  const [selected, setSelected] = useState<Field>();
  const [query, setQuery] = useState<string>("");

  const filteredData =
    query === ""
      ? DATA
      : DATA.filter((item) =>
          item.query
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      <Autocomplete
        data={filteredData}
        displayKey="query"
        onChange={(event) => setQuery(event.target.value)}
        onSelect={setSelected}
        placeholder="Search high-resolution images"
      />
      <div className="mt-5 mb-20 pb-20">
        <div>Selected:</div>
        <div>{selected?.query}</div>
      </div>
    </>
  );
};
