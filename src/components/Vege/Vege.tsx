import { useNavigate } from "react-router-dom";
import { vegeData} from "../../data/vegeData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Vege.scss";
import { speak } from "../../features/speak.ts";
import { useState } from "react";

export const Vege: React.FC = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<string | null>(null);

    return <section className="Vege">
        <div className="back_button" onClick={() => navigate("/")}>↩</div>
        <div className="vege_block">
            {vegeData.map((item: Animal) => {
            return <div className={`veg_block ${
              active === item.name ? "playing" : ""
            }`}
            onClick={() =>
              speak(
                item.name,
                () => setActive(item.name),
                () => setActive(null)
              )
            }>
                <img className="veg_img" src={item.imageUrl} alt={item.name} />
                <h2 className="veg_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>
}