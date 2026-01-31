import { useEffect, useState } from "react";
import { generateExample } from "../utils/generateExample";
import { speak } from "../features/speak";

export const useMathGame = () => {
  const [example, setExample] = useState(generateExample());
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  useEffect(() => {
    speak(example.a > example.b ? 
        `${example.a} ${example.operator} ${example.b}` : 
        `${example.b} ${example.operator} ${example.a}`);
  }, [example]);

  const checkAnswer = (value: number) => {
    if (value === example.correct) {
      setStatus("correct");
      speak("Great job!");

      setTimeout(() => {
        setStatus("idle");
        setExample(generateExample());
      }, 1500);
    } else {
      setStatus("wrong");
      speak("Try again");

      setTimeout(() => setStatus("idle"), 1500);
    }
  };

  return {
    example,
    status,
    checkAnswer,
  };
};
