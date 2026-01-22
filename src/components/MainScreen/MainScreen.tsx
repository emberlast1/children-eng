import { MainScreenComponent } from "../MainScreenComponent/MainScreenComponent"
import { mainScreenComponentsData as data} from "../../data/mainScreenData.js"
import "./MainScreen.scss";
import type { Component } from "../../types/Component.ts";

export const MainScreen = () => {
    const days = data[0];
    return <section className="MainScreen">
            <MainScreenComponent imageUrl={days.imageUrl} name={days.name} nameEng={days.nameEng} />

        
        <div className="other">
            {data.slice(1).map((item: Component) => {
                return <MainScreenComponent key={item.nameEng} imageUrl={item.imageUrl} name={item.name} nameEng={item.nameEng} />
            })}
        </div>
    </section>
}