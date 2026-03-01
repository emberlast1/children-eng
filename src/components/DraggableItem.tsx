import { useRef } from "react";

type Props = {
  name: string;
  image: string;
  onDrop: (name: string) => void;
};

export const DraggableItem: React.FC<Props> = ({
  name,
  image,
  onDrop,
}) => {
  const ref = useRef<HTMLImageElement>(null);

  const handleEnd = (clientX: number, clientY: number) => {
    const basket = document.querySelector(".basket");

    if (!basket) return;

    const rect = basket.getBoundingClientRect();

    if (
      clientX > rect.left &&
      clientX < rect.right &&
      clientY > rect.top &&
      clientY < rect.bottom
    ) {
      onDrop(name);
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    handleEnd(touch.clientX, touch.clientY);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    handleEnd(e.clientX, e.clientY);
  };

  return (
    <img
      ref={ref}
      src={image}
      className="food_item"
      onTouchEnd={onTouchEnd}
      onMouseUp={onMouseUp}
    />
  );
};
