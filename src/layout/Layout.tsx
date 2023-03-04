import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

const Layout: React.FC<Props> = ({ children }) => (
  <div className="bg-slate-100 h-screen">
    <div className="mx-auto max-w-7xl">{children}</div>
  </div>
);

export default Layout;
