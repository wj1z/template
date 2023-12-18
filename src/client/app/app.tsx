import Roact from "@rbxts/roact";
import { Layer } from "client/components/ui/layer";

export default function App() {
    return (
        <Layer key={"hud"} display_order={1}>
            <textbutton key={"ReactButton"}
                AnchorPoint={new Vector2(0.5, 0.5)}
                Size={UDim2.fromOffset(200, 50)}
                Position={UDim2.fromScale(0.5, 0.5)}
                BackgroundColor3={Color3.fromHex("#303446")}
                TextColor3={Color3.fromHex("#c6d0f5")}
                Text={"Click me!"}
                TextSize={16}
                Font={Enum.Font.SourceSansBold}
                BorderSizePixel={0}
            />
        </Layer>
    );
}