import { useNavigate } from "react-router-dom";
import { fruitsData} from "../../data/fruitsData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Fruits.scss";
import { speak } from "../../features/speak.ts";
import { useState } from "react";

export const Fruits: React.FC = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<string | null>(null);

    return <section className="Fruits">
        <div className="back_button" onClick={() => navigate("/")}>↩</div>
        <div className="fruits_block">
            {fruitsData.map((item: Animal) => {
            return <div className={`fruit_block ${
              active === item.name ? "playing" : ""
            }`}
            onClick={() =>
              speak(
                item.name,
                () => setActive(item.name),
                () => setActive(null)
              )
            }>
                <img className="fruit_img" src={item.imageUrl} alt={item.name} />
                <h2 className="fruit_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>
}