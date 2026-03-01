import { useNavigate } from "react-router-dom";
import "./WhereIs.scss";
import { useDragGame } from "../../hooks/useDragGame";


export const WhereIs: React.FC = () => {
    const navigate = useNavigate();
    const { items, target, status, onDrop } = useDragGame();

    const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const name = e.dataTransfer.getData("name");
    onDrop(name);
  };

    return <section className="WhereIs page">
        <div className="back_button" onClick={() => navigate("/")}></div>

        <div className={`drag_game ${status}`}>
      <div className="bee">
        🐝 Where is the {target.name}?
      </div>

      <div className="scene">
        {items.map((item) => (
          <img
            key={item.name}
            src={item.imageUrl}
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("name", item.name)
            }
            className="food_item"
          />
        ))}
      </div>

      <div
        className="basket"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        🧺
      </div>
    </div>
  );

    </section>
}