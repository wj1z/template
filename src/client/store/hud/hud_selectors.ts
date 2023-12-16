import { RootState } from "..";

export const select_money = (state: RootState) => state.hud.money;
export const select_name = (state: RootState) => state.hud.name;