import { hoarcekat } from "@rbxts/pretty-react-hooks";
import Roact from "@rbxts/roact";

export = hoarcekat(() => {
    return (
        <textbutton key={"Button"}
            AnchorPoint={new Vector2(0.5, 0.5)}
            Size={UDim2.fromOffset(200, 50)}
            Position={UDim2.fromScale(0.5, 0.5)}
            BackgroundColor3={Color3.fromHex("#303446")}
            TextColor3={Color3.fromHex("#C6D0F5")}
            Text={"template-ts"}
            TextSize={16}
            Font={Enum.Font.SourceSansBold}
            Event={{
                MouseButton1Click: () => print("Clicked!")
            }}
        >
            <uicorner
                CornerRadius={new UDim(0.075, 0)}
            />
            <uistroke
                ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
                Color={Color3.fromHex("#232634")}
                Thickness={2}
            />
        </textbutton>
    )
});