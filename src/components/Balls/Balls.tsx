import { useState } from "react";
import Ball from "../Ball/Ball";

const Balls = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const generateRandomNumber = (min: number, max: number): number => {
    const randomNumber: number =
      Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };

  const getRandomNumber = () => {
    const numberArrayLength: number = numbers.length;
    const newNumberArray: number[] = [];
    for (let i = 0; i < numberArrayLength; i++) {
      newNumberArray.push(generateRandomNumber(5, 36));
    }

    setNumbers(newNumberArray);
  };

  return (
    <div>
      <button className="rna" onClick={getRandomNumber} type="button">
        Get random
      </button>
      {numbers.map((number, index) => (
        <Ball key={index} number={number} />
      ))}
    </div>
  );
};

export default Balls;
