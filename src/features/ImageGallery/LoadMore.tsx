import React from "react";
import Button from "@/components/Button/Button";

type Props = {
  loading: boolean;
  loadMore: () => void;
};

const LoadMore: React.FC<Props> = ({ loading, loadMore }) => (
  <div className="text-center">
    {loading ? (
      "Loading"
    ) : (
      <Button variant="secondary" onClick={loadMore}>
        Load More
      </Button>
    )}
  </div>
);

export default LoadMore;
