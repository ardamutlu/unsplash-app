import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import _startCase from "lodash/startCase";
import ImageGallery from "@/features/ImageGallery/ImageGallery";
import { resetSearchPhotos } from "@/store/search.photos";

const Photos = () => {
  const { query, back } = useRouter();
  const dispatch = useDispatch();
  const title = _startCase(query.index as string);

  const routerBack = () => {
    back();
    dispatch(resetSearchPhotos());
  };

  return (
    <>
      <Head>
        <title>{title} | Unsplash Application</title>
        <meta name="description" content={`${title} "| Unsplash Application`} />
      </Head>
      <div className="flex py-4">
        <button className="mr-4" onClick={routerBack}>
          <ArrowLeftCircleIcon className="h-8 w-8" />
        </button>
        <div className="font-bold text-2xl">{title}</div>
      </div>
      <ImageGallery />
    </>
  );
};

export default Photos;
