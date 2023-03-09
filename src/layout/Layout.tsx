import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

const Layout: React.FC<Props> = ({ children, ...props }) => (
  <div className="bg-slate-100 h-full min-h-screen" {...props}>
    <div className="mx-auto max-w-7xl h-full">{children}</div>
  </div>
);

export default Layout;
