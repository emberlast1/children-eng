import { useNavigate } from "react-router-dom";
import { alphabetData } from "../../data/alphabetData.tsx"
import "./Alphabet.scss";
import type { Letter } from "../../types/letter.ts";
import { useSpeakAnimation } from "../../hooks/useSpeakAnimation.ts";

export const Alphabet: React.FC = () => {
    const navigate = useNavigate();
    const { active, animation, play } = useSpeakAnimation();

    return <section className="Alphabet">
        <div className="back_button" onClick={() => navigate("/")}></div>
        <div className="alphabet_block">
            {alphabetData.map((item: Letter) => {
            return <div key={item.name} className={`letter_block ${
              active === item.name ? `playing ${animation}` : ""
            }`}
            onClick={() =>
              play(item.name)
            }>
                <h2 className="letter_name">{item.text}</h2>
            </div>
        })}
        </div>
    </section>
}