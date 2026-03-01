import { useNavigate } from "react-router-dom";
import { seaCreaturesData as data} from "../../data/seaCreaturesData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./seaCreatures.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const SeaCreatures: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (<section className="SeaCreatures page">
        <div className="back_button" onClick={() => navigate("/")}></div>

        <div className="seaCreatures_block">
            {data.map((item: Animal) => {
            return <div key={item.name} className={`seaC_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <img className="seaC_img" src={item.imageUrl} alt={item.name} />
                <h2 className="seaC_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>);
}