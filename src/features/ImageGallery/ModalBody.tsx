import React, { useState } from "react";
import _map from "lodash/map";
import _kebabCase from "lodash/kebabCase";
import Button from "@/components/Button/Button";
import { IPhoto } from "@/store/get.photo";
import Label from "./Label";
import Text from "./Text";
import Title from "./Title";
import { useRouter } from "next/router";

type Props = {
  data: IPhoto;
};

const MAX_HEIGHT = 576;

const ModalBody: React.FC<Props> = ({ data }) => {
  const { replace, push } = useRouter();
  const [maxHeight, setMaxHeight] = useState<string | number>(MAX_HEIGHT);

  const toggleMaxHeight = () =>
    setMaxHeight((prevState) =>
      prevState === MAX_HEIGHT ? "none" : MAX_HEIGHT
    );

  return (
    <>
      <div
        className="h-full relative cursor-pointer bg-gray-50"
        onClick={toggleMaxHeight}
      >
        <img
          className="w-auto h-full m-auto"
          style={{
            aspectRatio: `${data?.width}/${data?.height}`,
            maxHeight: maxHeight,
          }}
          src={data?.urls?.regular}
          alt={data?.alt_description}
        />
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        <div>
          <Label>Views</Label>
          <Text>{data?.views}</Text>
        </div>
        <div className="mr-8">
          <Label>Downloads</Label>
          <Text>{data?.downloads}</Text>
        </div>
        <div className="mr-8">
          <Label>Likes</Label>
          <Text>{data?.likes}</Text>
        </div>
        {data?.topics.length > 0 ? (
          <div className="mr-8">
            <Label>Featured in</Label>
            <div>
              {_map(data?.topics, ({ id, title }) => (
                <a key={id} href={`/photos/${_kebabCase(title)}`}>
                  {title}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-8">
        <Title>Related Collections</Title>
        <div className="flex flex-wrap">
          {_map(data?.related_collections?.results, ({ cover_photo }) => (
            <img
              key={cover_photo.id}
              className="mr-4 max-h-40 mb-4 md:md-0"
              src={cover_photo?.urls?.thumb}
              alt={cover_photo?.alt_description}
            />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Title>Related tags</Title>
        <div className="flex flex-wrap">
          {_map(data?.tags, ({ title }, index) => (
            <Button
              as="a"
              key={index}
              variant="secondary"
              href={`/photos/${_kebabCase(title)}`}
            >
              {title}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ModalBody;
