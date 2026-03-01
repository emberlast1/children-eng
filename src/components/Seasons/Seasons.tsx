import { useNavigate } from "react-router-dom";
import { seasonsData as data} from "../../data/seasonsData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Seasons.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const Seasons: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (<section className="Seasons page">
        <div className="back_button" onClick={() => navigate("/")}></div>

        <div className="seasons_block">
            {data.map((item: Animal) => {
            return <div key={item.name} className={`sea_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <img className="sea_img" src={item.imageUrl} alt={item.name} />
                <h2 className="sea_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>);
}