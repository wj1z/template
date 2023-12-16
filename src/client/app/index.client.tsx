import { Players } from "@rbxts/services";
import Roact, { StrictMode } from "@rbxts/roact";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import App from "./app";
import { ReflexProvider } from "@rbxts/react-reflex";
import { store } from "client/store";

const root = createRoot(new Instance("Folder"));
const player_gui = Players.LocalPlayer.WaitForChild("PlayerGui");

root.render(
    createPortal(
        <StrictMode>
            <ReflexProvider producer={store}>
                <App key={"app"} />
            </ReflexProvider>
        </StrictMode>,
        player_gui
    )
);