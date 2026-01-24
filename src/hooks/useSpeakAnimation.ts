import { useState } from "react";
import { speak } from "../features/speak";

const animations = ["wobble"];

export const useSpeakAnimation = () => {
  const [active, setActive] = useState<string | null>(null);
  const [animation, setAnimation] = useState<string>("");

  const play = (text: string) => {
    const random =
      animations[Math.floor(Math.random() * animations.length)];

    speak(
      text,
      () => {
        setActive(text);
        setAnimation(random);
      },
      () => {
        setActive(null);
        setAnimation("");
      }
    );
  };

  return {
    active,
    animation,
    play,
  };
};
