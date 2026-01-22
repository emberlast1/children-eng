import "./MainScreenComponent.scss";
import { useNavigate } from "react-router-dom";

type Props = {
    imageUrl: string;
    name: string;
    nameEng: string;
};

export const MainScreenComponent: React.FC<Props> = ({ imageUrl, name, nameEng }) => {
    const navigate = useNavigate();

    return <div className="MainScreenComponent" onClick={ () => navigate(`/${nameEng.toLocaleLowerCase()}`)}>
        <img className="component_image" src={imageUrl} alt={nameEng} />
        <h2 className="component_name component_name--eng">{nameEng}</h2>
        <h3 className="component_name">{name}</h3>
    </div>
}