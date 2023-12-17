import { CombineStates } from "@rbxts/reflex";
import { shared_slice } from "./shared_slice";

export type SharedState = CombineStates<typeof shared_slices>;

export const shared_slices = {
    shared: shared_slice
}