import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const Content: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={classNames("px-2 sm:px-6 lg:px-8", className)} {...props}>
    {children}
  </div>
);

export default Content;
