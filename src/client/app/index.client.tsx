import { Players } from "@rbxts/services";
import Roact, { StrictMode } from "@rbxts/roact";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { App } from "./app";

const root = createRoot(new Instance("Folder"));
const player_gui = Players.LocalPlayer.WaitForChild("PlayerGui");

root.render(
    createPortal(
        <StrictMode>
            <App key={"app"} />
        </StrictMode>,
        player_gui
    )
);