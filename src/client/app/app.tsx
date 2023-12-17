import Roact from "@rbxts/roact";
import { Layer } from "client/components/ui/layer";

export default function App() {
    return (
        <Layer key={"hud"} display_order={1} />
    );
}