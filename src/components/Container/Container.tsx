import type { PropsWithChildren } from "react";
import "./Container"

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;