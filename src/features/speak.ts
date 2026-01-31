let voices: SpeechSynthesisVoice[] = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
};

export const speak = (text: string, onStart?: () => void, onEnd?: () => void) => {
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  const enVoice = voices.find(v => v.lang === "en-US");

  if (enVoice) {
    utterance.voice = enVoice;
  }

  utterance.lang = "en-US";
  utterance.rate = 0.6;

  onStart?.();
  utterance.onend = () => onEnd?.();

  speechSynthesis.speak(utterance);
};
