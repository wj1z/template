import Roact from "@rbxts/roact";
import { FrameProps } from "./frame";

export interface ButtonProps extends FrameProps<TextButton> {
    active?: boolean | Roact.Binding<boolean>,
    on_click?: () => void,
	on_mouse_down?: () => void,
	on_mouse_up?: () => void,
	on_mouse_enter?: () => void,
	on_mouse_leave?: () => void
}

const Button = (props: ButtonProps) => {
    const { on_click, on_mouse_down, on_mouse_enter, on_mouse_leave, on_mouse_up } = props;

    const event: Roact.JsxInstanceEvents<TextButton> = {
        Activated: on_click && (() => on_click()),
        MouseButton1Down: on_mouse_down && (() => on_mouse_down()),
        MouseButton1Up: on_mouse_up && (() => on_mouse_up()),
        MouseEnter: on_mouse_enter && (() => on_mouse_enter()),
        MouseLeave: on_mouse_leave && (() => on_mouse_leave()),
        ...props.event
    }

    return (
        <textbutton
            Active={props.active}
            AutoButtonColor={false}
            AnchorPoint={props.anchor_point}
            Position={props.position}
            Size={props.size}
            Text=""
            BorderSizePixel={0}
            BackgroundColor3={props.background_color}
            BackgroundTransparency={props.background_transparency}
            ClipsDescendants={props.clips_descendants}
            Visible={props.visible}
            ZIndex={props.z_index}
            LayoutOrder={props.layout_order}
            Event={event}
        >
            {props.corner_radius && <uicorner CornerRadius={props.corner_radius} />}
            {props.children}
        </textbutton>
    );
}

export default Button;