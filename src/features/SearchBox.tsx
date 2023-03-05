import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import _kebabCase from "lodash/kebabCase";
import Autocomplete, { Field } from "@/components/Autocomplete";
import { fetchNautocomplete, resetNautocomplete } from "@/store/nautocomplete";
import { RootState } from "@/store/store";

const SearchBox = () => {
  const { push } = useRouter();
  const nautocomplete: any = useSelector(
    (state: RootState) => state.nautocomplete
  );
  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      dispatch(fetchNautocomplete(event.target.value));
    } else {
      dispatch(resetNautocomplete());
    }
  };

  const onSelect = ({ query }: Field) =>
    push(`/photos/${_kebabCase(query as string)}`);

  return (
    <Autocomplete
      data={nautocomplete.payload}
      displayKey="query"
      onChange={onChange}
      onSelect={onSelect}
    />
  );
};

export default SearchBox;
