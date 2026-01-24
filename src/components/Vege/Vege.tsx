import { useNavigate } from "react-router-dom";
import { vegeData} from "../../data/vegeData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Vege.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const Vege: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return <section className="Vege">
        <div className="back_button" onClick={() => navigate("/")}></div>
        <div className="vege_block">
            {vegeData.map((item: Animal) => {
            return <div key={item.name} className={`veg_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <img className="veg_img" src={item.imageUrl} alt={item.name} />
                <h2 className="veg_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>
}