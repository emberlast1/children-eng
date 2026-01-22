import { useNavigate } from "react-router-dom";
import { animalsData } from "../../data/animalsData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Animals.scss";
import { speak } from "../../features/speak.ts";
import { useState } from "react";

export const Animals: React.FC = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<string | null>(null);

    return <section className="Animals">
        <div className="back_button" onClick={() => navigate("/")}>↩</div>
        <div className="animals_block">
            {animalsData.map((item: Animal) => {
            return <div className={`animal_block ${
              active === item.name ? "playing" : ""
            }`}
            onClick={() =>
              speak(
                item.name,
                () => setActive(item.name),
                () => setActive(null)
              )
            }>
                <img className="animal_img" src={item.imageUrl} alt={item.name} />
                <h2 className="animal_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>
}