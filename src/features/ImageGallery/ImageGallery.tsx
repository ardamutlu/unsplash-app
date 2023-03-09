import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import _map from "lodash/map";
import _uniqBy from "lodash/unionBy";
import _kebabCase from "lodash/kebabCase";
import _lowerCase from "lodash/lowerCase";
import { RootState } from "@/store/store";
import MasonryLayout from "@/components/MasonryLayout/MasonryLayout";
import Modal from "@/components/Modal/Modal";
import { getPhoto, resetGetPhoto } from "@/store/get.photo";
import { fetchSearchPhotos } from "@/store/search.photos";
import useLoadMore from "@/hooks/useLoadMore";
import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";
import LoadMore from "./LoadMore";

const ImageGallery: React.FC = () => {
  const dispatch = useDispatch();
  const { get_photo } = useSelector(
    ({ get_photo }: RootState) => ({ get_photo }),
    shallowEqual
  );
  const { query, isReady } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, loadMore } = useLoadMore({
    isReady,
    callApi: (page) =>
      dispatch(
        fetchSearchPhotos({ query: _lowerCase(query.index as string), page })
      ),
  });

  const onClick = (id: string) => {
    dispatch(getPhoto(id));
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    dispatch(resetGetPhoto());
  };

  return (
    <>
      <MasonryLayout>
        {_map(data, ({ id, urls, alt_description }) => {
          return (
            <div
              key={id}
              className="cursor-pointer rounded-lg pb-4 break-inside"
              onClick={() => onClick && onClick(id)}
            >
              <img src={urls.small} alt={alt_description} />
            </div>
          );
        })}
      </MasonryLayout>
      <LoadMore loadMore={loadMore} loading={loading} />
      <Modal
        title={<ModalTitle data={get_photo.payload} onClose={onClose} />}
        body={<ModalBody data={get_photo.payload} />}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ImageGallery;
