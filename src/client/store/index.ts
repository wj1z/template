import { InferState, combineProducers } from "@rbxts/reflex";
import { hud_slice } from "./hud/hud_slice";

export type RootStore = typeof store;
export type RootState = InferState<RootStore>;

export const store = combineProducers({
    hud: hud_slice
});