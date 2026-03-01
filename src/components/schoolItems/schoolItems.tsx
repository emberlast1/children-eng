import { useNavigate } from "react-router-dom";
import { schoolItemsData as data} from "../../data/schoolItemsData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./schoolItems.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const SchoolItems: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (<section className="SchoolItems page">
        <div className="back_button" onClick={() => navigate("/")}></div>

        <div className="items_block">
            {data.map((item: Animal) => {
            return <div key={item.name} className={`item_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <img className="item_img" src={item.imageUrl} alt={item.name} />
                <h2 className="item_name">{item.name}</h2>
            </div>
        })}
        </div>
    </section>);
}