import React from "react";
import _map from "lodash/map";
import _kebabCase from "lodash/kebabCase";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IPhoto } from "@/store/get.photo";

type Props = {
  data: IPhoto;
  onClose?: () => void;
};

const ModalTitle: React.FC<Props> = ({ data, onClose }) => {
  return (
    <div className="flex justify-between pb-2">
      <div className="flex">
        <img
          className="w-8 h-8 rounded-full ring-1 ring-gray-300 dark:ring-gray-300"
          src={data?.user?.profile_image?.small}
          alt={data?.user?.name}
        />
        <div className="text-2xl ml-4">
          {data?.description || data?.user?.name}
        </div>
      </div>
      <div>
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
      </div>
    </div>
  );
};

export default ModalTitle;
