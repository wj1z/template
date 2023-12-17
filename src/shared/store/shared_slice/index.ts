import { createProducer } from "@rbxts/reflex";

export interface SharedSliceState {
    readonly example_number: number,
    readonly example_string: string
}

const initial_state: SharedSliceState = {
    example_number: 0,
    example_string: "String"
};

export const shared_slice = createProducer(initial_state, {
    set_shared_number: (state, example_number: number) => ({
        ...state,
        example_number
    }),
    set_shared_string: (state, example_string: string) => ({
        ...state,
        example_string
    })
});