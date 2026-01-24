import { useNavigate } from "react-router-dom";
import { colorData} from "../../data/colorData.tsx"
import type { Color } from "../../types/color.ts";
import "./Colors.scss";
import { speak } from "../../features/speak.ts";
import { useState } from "react";

export const Colors: React.FC = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<string | null>(null);

    return <section className="Colors page">
        <div className="back_button" onClick={() => navigate("/")}></div>
        <div className="colors_block">
            {colorData.map((item: Color) => {
            return <div key={item.name} className={`color_block ${
              active === item.name ? "playing" : ""
            }`}
            onClick={() =>
              speak(
                item.name,
                () => setActive(item.name),
                () => setActive(null)
              )
            }>
                <div className="color_color" style={{backgroundColor: item.colorHash}}></div>
                <h2 className="color_name" style={{color: item.colorHash}}>{item.name}</h2>
            </div>
        })}
        </div>
    </section>
}