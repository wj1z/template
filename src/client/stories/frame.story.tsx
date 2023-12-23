import Roact from "@rbxts/roact";
import Frame from "client/components/ui/frame";
import { hoarcekat } from "@rbxts/pretty-react-hooks";
import { palette } from "client/constants/palette";

export = hoarcekat(() => {
    return (
        <Frame
            anchor_point={new Vector2(0.5, 0.5)}
            position={UDim2.fromScale(0.5, 0.5)}
            size={UDim2.fromOffset(200, 50)}
            background_color={palette.base}
            corner_radius={new UDim(0.1, 0)}
        >
            <uistroke Color={palette.crust} />
        </Frame>
    )
});