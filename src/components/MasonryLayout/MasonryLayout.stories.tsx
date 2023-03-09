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
import _map from "lodash/map";
import MasonryLayout from "../MasonryLayout/MasonryLayout";

const DATA = [
  {
    id: "xUUZcpQlqpM",
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTgxMTh8MHwxfHNlYXJjaHwxfHxhbmltYWx8ZW58MHx8fHwxNjc4MzU5MTU2&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "aeNg4YA41P8",
    src: "https://images.unsplash.com/photo-1555169062-013468b47731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTgxMTh8MHwxfHNlYXJjaHwyfHxhbmltYWx8ZW58MHx8fHwxNjc4MzU5MTU2&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "Q_3WmguWgYg",
    src: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTgxMTh8MHwxfHNlYXJjaHwzfHxhbmltYWx8ZW58MHx8fHwxNjc4MzU5MTU2&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "K_Na5gCmh38",
    src: "https://images.unsplash.com/photo-1484406566174-9da000fda645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTgxMTh8MHwxfHNlYXJjaHw0fHxhbmltYWx8ZW58MHx8fHwxNjc4MzU5MTU2&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "L-2p8fapOA8",
    src: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTgxMTh8MHwxfHNlYXJjaHw1fHxhbmltYWx8ZW58MHx8fHwxNjc4MzU5MTU2&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "Mv9hjnEUHR4",
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTgxMTh8MHwxfHNlYXJjaHw2fHxhbmltYWx8ZW58MHx8fHwxNjc4MzU5MTU2&ixlib=rb-4.0.3&q=80&w=400",
  },
];

export default {
  title: "COMPONENTS/MasonryLayout",
  component: MasonryLayout,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Masonry Layout</Title>
          <Subtitle>
            Masonry layout is a layout method where one axis uses a typical
            strict grid layout, most often columns, and the other a masonry
            layout. On the masonry axis, rather than sticking to a strict grid
            with gaps being left after shorter items, the items in the following
            row rise up to completely fill the gaps.
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

export const Default: ComponentStory<typeof MasonryLayout> = () => (
  <MasonryLayout>
    {_map(DATA, ({ id, src }) => {
      return (
        <div key={id} className="cursor-pointer rounded-lg pb-4 break-inside">
          <img src={src} alt="" />
        </div>
      );
    })}
  </MasonryLayout>
);
