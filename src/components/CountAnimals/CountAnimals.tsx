import { useNavigate } from "react-router-dom";
import { useCountAnimals } from "../../hooks/useCountAnimals";
import "./CountAnimals.scss";

export const CountAnimals: React.FC = () => {
  const { task, status, check } = useCountAnimals();
  const navigate = useNavigate();

  return (
    <section className="CountAnimals page">
      <div className="back_button" onClick={() => navigate("/")}></div>
      <div className={`count_game ${status}`}>
      <div className="animals">
        {Array.from({ length: task.count }).map((_, i) => (
          <img
            key={i}
            src={task.animal.imageUrl}
            className="animal"
            alt="animal"
          />
        ))}
      </div>
    </div>
    <div className="answers">
        {task.options.map((num) => (
          <button
            key={num}
            onClick={() => check(num)}
            className="answer"
          >
            {num}
          </button>
        ))}
      </div>
    </section>
    
  );
};
