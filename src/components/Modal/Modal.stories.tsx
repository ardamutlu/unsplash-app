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
import Modal from "./Modal";
import Button from "../Button/Button";

export default {
  title: "COMPONENTS/Modal",
  component: Modal,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Dialog (Modal)</Title>
          <Subtitle>
            Use any of the available button style types to quickly create a A
            fully-managed, renderless dialog component jam-packed with
            accessibility and keyboard features, perfect for building completely
            custom modal and dialog windows for your application.
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

const ModalTitle = () => {
  return <div>What is Lorem Ipsum?</div>;
};

const ModalBody = () => {
  return (
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  );
};

export const Default: ComponentStory<typeof Modal> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Modal
        isOpen={open}
        title={<ModalTitle />}
        body={<ModalBody />}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
