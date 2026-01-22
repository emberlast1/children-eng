import { useNavigate } from "react-router-dom";
import { daysData} from "../../data/daysData.tsx"
import type { Color } from "../../types/color.ts";
import "./Days.scss";
import { speak } from "../../features/speak.ts";
import { useState } from "react";

export const Days: React.FC = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<string | null>(null);

    return <section className="Days">
        <div className="back_button" onClick={() => navigate("/")}>↩</div>
        <div className="days_block">
            {daysData.map((item: Color) => {
            return <div style={{backgroundColor: item.colorHash}} className={`day_block ${
              active === item.name ? "playing" : ""
            }`}
            onClick={() =>
              speak(
                item.name,
                () => setActive(item.name),
                () => setActive(null)
              )
            }>
                <h2 className="day_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>
}