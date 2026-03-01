import { useEffect, useState } from "react";
import { whereIsData as data } from "../data/whereIsData";
import { speak } from "../features/speak";

export const useDragGame = () => {
  const [items, setItems] = useState([...data]);
  const [target, setTarget] = useState(items[0]);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  useEffect(() => {
    speak(target.name);
  }, [target]);

  const nextTarget = () => {
    const remaining = items.filter((i) => i !== target);

    if (remaining.length === 0) {
      setItems([...data]);
    }

    setTarget(remaining[Math.floor(Math.random() * remaining.length)]);
  };

  const onDrop = (name: string) => {
    if (name === target.name) {
      setStatus("correct");

      setItems((prev) => prev.filter((i) => i.name !== name));

      setTimeout(() => {
        setStatus("idle");
        nextTarget();
      }, 900);
    } else {
      setStatus("wrong");

      setTimeout(() => setStatus("idle"), 600);
    }
  };

  return {
    items,
    target,
    status,
    onDrop,
  };
};
