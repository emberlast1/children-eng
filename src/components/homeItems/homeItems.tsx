import { useNavigate } from "react-router-dom";
import { homeItemsData as data} from "../../data/homeItemsData.tsx"
import type { Animal } from "../../types/animal.ts";
import "./homeItems.scss";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const HomeItems: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return (<section className="HomeItems page">
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