import { useNavigate } from "react-router-dom";
import { fruitsData} from "../../data/fruitsData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Fruits.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const Fruits: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (<section className="Fruits page">
        <div className="back_button" onClick={() => navigate("/")}></div>

        <div className="fruits_block">
            {fruitsData.map((item: Animal) => {
            return <div key={item.name} className={`fruit_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <img className="fruit_img" src={item.imageUrl} alt={item.name} />
                <h2 className="fruit_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>);
}