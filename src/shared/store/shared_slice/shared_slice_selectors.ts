import { SharedState } from "..";

export const select_shared_number = (state: SharedState) => state.shared.example_number;
export const select_shared_string = (state: SharedState) => state.shared.example_string;