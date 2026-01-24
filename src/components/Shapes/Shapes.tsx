import { useNavigate } from "react-router-dom";
import { shapesData} from "../../data/shapesData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Shapes.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const Shapes: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (<section className="Shapes">
        <div className="back_button" onClick={() => navigate("/")}></div>

        <div className="shapes_block">
            {shapesData.map((item: Animal) => {
            return <div key={item.name} className={`shape_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <img className="shape_img" src={item.imageUrl} alt={item.name} />
                <h2 className="shape_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>);
}