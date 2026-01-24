import { useLocation, useNavigate } from "react-router-dom";
import { animalsData } from "../../data/animalsData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Animals.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";
import { useEffect } from "react";


export const Animals: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

    return (
    <section className="Animals page">
      <div className="back_button" onClick={() => navigate("/")}></div>

      <div className="animals_block">
        {animalsData.map((item: Animal) => (
          <div
            key={item.name}
            className={`animal_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() => play(item.name)}
          >
            <img
              className="animal_img"
              src={item.imageUrl}
              alt={item.name}
            />
            <h2 className="animal_name">{item.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}