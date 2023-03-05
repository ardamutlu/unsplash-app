import React, { useEffect } from "react";
import { useRouter } from "next/router";
import _lowerCase from "lodash/lowerCase";

const Photos = () => {
  const { query } = useRouter();

  useEffect(() => {
    if (query.index) {
      // console.log("query:", _lowerCase(query.index as string));
    }
  }, [query]);

  return <div>Photoa</div>;
};

export default Photos;
