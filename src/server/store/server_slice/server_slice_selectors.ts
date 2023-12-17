import { RootState } from "..";

export const select_number = (state: RootState) => state.server.example_number;
export const select_string = (state: RootState) => state.server.example_string;