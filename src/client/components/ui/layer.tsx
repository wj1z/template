import Roact from "@rbxts/roact";

interface LayerProps extends Roact.PropsWithChildren {
    display_order: number
};

const Layer = ({display_order, children}: LayerProps) => {
    return (
        <screengui
            ResetOnSpawn={false}
            DisplayOrder={display_order}
            IgnoreGuiInset
            ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
        >
            {children}
        </screengui>
    );
}

export default Layer;