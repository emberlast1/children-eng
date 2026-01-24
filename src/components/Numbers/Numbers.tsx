import { useNavigate } from "react-router-dom";
import type { Animal } from "../../types/animal.ts";
import "./Numbers.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";
import { numbersData } from "../../data/numbersData.tsx";


export const Numbers: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (
    <section className="Numbers page">
      <div className="back_button" onClick={() => navigate("/")}></div>

      <div className="numbers_block">
        {numbersData.map((item: Animal) => (
          <div
            key={item.name}
            className={`number_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() => play(item.name)}
          >
            <img
              className="number_img"
              src={item.imageUrl}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}