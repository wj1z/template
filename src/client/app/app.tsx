import Roact from "@rbxts/roact";
import { Layer } from "client/components/ui/layer";

export function App() {
    return (
        <Layer key={"hud"} display_order={1} />
    );
}