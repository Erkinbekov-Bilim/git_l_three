import type React from "react";

interface IBallProps {
  number: number;
}

const Ball: React.FC<IBallProps> = ({ number }) => {
  return (
    <div>
      <p>{number}</p>
    </div>
  );
};

export default Ball;
