import Roact, { createRef } from "@rbxts/roact";
import { hoarcekat } from "@rbxts/pretty-react-hooks";
import { palette } from "client/constants/palette";
import { Button } from "client/components/ui/button";
import { Text } from "client/components/ui/text";

export = hoarcekat(() => {
    return (
        <Button
            anchor_point={new Vector2(0.5, 0.5)}
            position={UDim2.fromScale(0.5, 0.5)}
            size={UDim2.fromScale(0.2, 0.2)}
            background_color={palette.base}
            corner_radius={new UDim(0.1, 0)}
            on_click={() => print("Clicked!")}
        >
            <Text
                anchor_point={new Vector2(0.5, 0.5)}
                position={UDim2.fromScale(0.5, 0.5)}
                size={UDim2.fromScale(1, 1)}
                text={"Template Button"}
                text_color={palette.text}
            />
            <uistroke Color={palette.crust} ApplyStrokeMode={Enum.ApplyStrokeMode.Border} />
        </Button>
    )
});