import Roact from "@rbxts/roact";
import HUD from "client/components/screens/hud";
import { Players } from "@rbxts/services";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { store } from "client/store";

const root = createRoot(new Instance("Folder"));
const player_gui = Players.LocalPlayer.WaitForChild("PlayerGui");

root.render(
    createPortal(
        <Roact.StrictMode>
            <ReflexProvider producer={store}>
                <HUD key={"hud"} />
            </ReflexProvider>
        </Roact.StrictMode>,
        player_gui
    )
);