import type React from "react";
import "./Ball.css";

interface IBallProps {
  number: number;
}

const Ball: React.FC<IBallProps> = ({ number }) => {
  return (
    <>
      <div className="ball">{number}</div>
    </>
  );
};

export default Ball;
