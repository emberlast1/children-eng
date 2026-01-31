import { useNavigate } from "react-router-dom";
import { familyData as data} from "../../data/familyData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./Family.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const Family: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (<section className="Family page">
        <div className="back_button" onClick={() => navigate("/")}></div>

        <div className="family_block">
            {data.map((item: Animal) => {
            return <div key={item.name} className={`fam_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <img className="fam_img" src={item.imageUrl} alt={item.name} />
                <h2 className="fam_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>);
}