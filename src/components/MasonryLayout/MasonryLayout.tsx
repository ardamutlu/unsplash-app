import React, { forwardRef } from "react";

type Props = {} & React.HTMLAttributes<HTMLElement>;

const MasonryLayout = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => (
    <div {...props} ref={ref} className="masonry sm:masonry-sm md:masonry-md">
      {children}
    </div>
  )
);

MasonryLayout.displayName = "MasonryLayout";
export default MasonryLayout;
