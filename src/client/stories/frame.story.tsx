import Roact from "@rbxts/roact";
import { hoarcekat } from "@rbxts/pretty-react-hooks";
import { Frame } from "client/components/ui/frame";
import { palette } from "client/constants/palette";

export = hoarcekat(() => {
    return (
        <Frame
            anchor_point={new Vector2(0.5, 0.5)}
            position={UDim2.fromScale(0.5, 0.5)}
            size={UDim2.fromScale(0.2, 0.2)}
            background_color={palette.base}
            corner_radius={new UDim(0.1, 0)}
        >
            <uistroke Color={palette.crust} />
        </Frame>
    )
});