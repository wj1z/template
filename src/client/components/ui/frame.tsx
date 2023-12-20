import Roact, { forwardRef } from "@rbxts/roact";

export interface FrameProps<T extends Instance = Frame> extends Roact.PropsWithChildren {
    ref?: Roact.Ref<T>,
    event?: Roact.JsxInstanceEvents<T>,
    change?: Roact.JsxInstanceChangeEvents<T>,
    anchor_point?: Vector2 | Roact.Binding<Vector2>,
    position?: UDim2 | Roact.Binding<UDim2>,
    size?: UDim2 | Roact.Binding<UDim2>,
	rotation?: number | Roact.Binding<number>,
	background_color?: Color3 | Roact.Binding<Color3>,
	background_transparency?: number | Roact.Binding<number>,
	clips_descendants?: boolean | Roact.Binding<boolean>,
	visible?: boolean | Roact.Binding<boolean>,
	z_index?: number | Roact.Binding<number>,
	layout_order?: number | Roact.Binding<number>,
	corner_radius?: UDim | Roact.Binding<UDim>
}

export const Frame = forwardRef((props: FrameProps, ref: Roact.Ref<Frame>) => {
    return (
        <frame
            ref={ref}
            AnchorPoint={props.anchor_point}
            Position={props.position}
            Size={props.size}
            Rotation={props.rotation}
            BorderSizePixel={0}
            BackgroundColor3={props.background_color}
            BackgroundTransparency={props.background_transparency}
            ClipsDescendants={props.clips_descendants}
            Visible={props.visible}
            ZIndex={props.z_index}
            LayoutOrder={props.layout_order}
            Event={props.event || {}}
            Change={props.change || {}}
        >
            {props.corner_radius && <uicorner CornerRadius={props.corner_radius} />}
            {props.children}
        </frame>
    );
});