  export const speak = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void
) => {
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.4;

  onStart?.();

  utterance.onend = () => {
    onEnd?.();
  };

  speechSynthesis.speak(utterance);
};