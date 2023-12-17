import { createProducer } from "@rbxts/reflex";

export interface ClientSliceState {
    readonly example_number: number,
    readonly example_string: string
};

const initial_state: ClientSliceState = {
    example_number: 0,
    example_string: "String"
};

export const client_slice = createProducer(initial_state, {
    set_number: (state, example_number: number) => (
        {
            ...state,
            example_number
        }
    ),
    set_string: (state, example_string: string) => (
        {
            ...state,
            example_string
        }
    )
});