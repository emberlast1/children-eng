import { useNavigate } from "react-router-dom";
import { useMathGame } from "../../hooks/useMathGame";
import "./Counter.scss";

export const Counter: React.FC = () => {
  const { example, status, checkAnswer } = useMathGame();
  const navigate = useNavigate();

  const operator = example.operator === 'plus' ? '+' : '-';

  return (
    <div className="Counter page">
        <div className="back_button" onClick={() => navigate("/")}></div>
        <div className={`count_game ${status}`}>
      <h1 className="count_example">
        {example.a > example.b ? 
        `${example.a} ${operator} ${example.b}` : 
        `${example.b} ${operator} ${example.a}`}
        <br />
        =
      </h1>

      <div className="answers">
        {example.options.map((num) => (
          <button
            key={num}
            className="answer_btn"
            onClick={() => checkAnswer(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
    </div>
    
  );
};
