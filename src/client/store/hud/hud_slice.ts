import { createProducer } from "@rbxts/reflex";

export interface HUDState {
    readonly money: number,
    readonly name: string
};

const initial_state: HUDState = {
    money: 0,
    name: "Nick"
};

export const hud_slice = createProducer(initial_state, {
    set_money: (state, money: number) => (
        {...state, money}
    ),

    set_name: (state, name: string) => (
        {...state, name}
    )
});