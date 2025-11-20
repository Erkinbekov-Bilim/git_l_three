import { useState } from "react";
import Ball from "../Ball/Ball";
import "./Balls.css";

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

    const sortedNumberArray = newNumberArray.sort((a, b) => a - b);
    setNumbers(sortedNumberArray);
  };

  return (
    <>
      <div className="section-balls">
        <button
          className="btn-random-number"
          onClick={getRandomNumber}
          type="button"
        >
          Get random
        </button>
        <div className="block-balls">
          {numbers.map((number, index) => (
            <Ball key={index} number={number} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Balls;
