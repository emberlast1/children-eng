import { useEffect, useState } from "react";
import { generateCountTask } from "../utils/generateCountTask";
import { speak } from "../features/speak";

export const useCountAnimals = () => {
  const [task, setTask] = useState(generateCountTask());
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  useEffect(() => {
    speak(`How many ${task.animal.plural}?`);
  }, [task]);

  const check = (value: number) => {
    if (value === task.count) {
      setStatus("correct");
      speak("Great job!");

      setTimeout(() => {
        setStatus("idle");
        setTask(generateCountTask());
      }, 1500);
    } else {
      setStatus("wrong");
      speak("Try again!");

      setTimeout(() => setStatus("idle"), 1500);
    }
  };

  return { task, status, check };
};
