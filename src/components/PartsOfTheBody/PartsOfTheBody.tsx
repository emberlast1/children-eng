import { useNavigate } from "react-router-dom";
import { partsOfTheBodyData as data} from "../../data/partsOfTheBodyData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./PartsOfTheBody.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const PartsOfTheBody: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (<section className="PartsOfTheBody page">
        <div className="back_button" onClick={() => navigate("/")}></div>

        <div className="parts_block">
            {data.map((item: Animal) => {
            return <div key={item.name} className={`part_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <img className="part_img" src={item.imageUrl} alt={item.name} />
                <h2 className="part_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>);
}