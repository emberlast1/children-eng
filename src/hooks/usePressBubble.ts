export const usePressBubble = () => {
  const createBubble = (
    e: React.MouseEvent | React.TouchEvent
  ) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    let x = 0;
    let y = 0;

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    const bubble = document.createElement("span");
    bubble.className = "press-bubble";
    bubble.style.left = `${x - 10}px`;
    bubble.style.top = `${y - 10}px`;

    target.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 450);
  };

  return { createBubble };
};
