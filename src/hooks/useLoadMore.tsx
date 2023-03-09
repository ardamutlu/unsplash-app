import { useEffect, useState } from "react";
import _uniqBy from "lodash/uniqBy";
import { PayloadAction } from "@reduxjs/toolkit";
import { ISearchPhotos } from "@/store/search.photos";

type Props = {
  isReady: boolean;
  callApi: (page: number) => Promise<PayloadAction<ISearchPhotos>>;
};

const UseLoadMore = ({ callApi, isReady }: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = () => {
    setLoading(true);
    callApi(page).then((response) => {
      setData((prevState) =>
        _uniqBy([...prevState, ...response.payload.results], "id")
      );
      setLoading(false);
      setPage((prevState) => prevState + 1);
    });
  };

  useEffect(() => {
    if (isReady) loadMore();
  }, [isReady]);

  return { data, loading, loadMore };
};

export default UseLoadMore;
