import { RootState } from "..";

export const select_number = (state: RootState) => state.client.example_number;
export const select_string = (state: RootState) => state.client.example_string;