import { Networking } from "@flamework/networking";
import { BroadcastAction } from "@rbxts/reflex";

interface ServerEvents {
    start(): void
}
interface ServerFunctions {}

interface ClientEvents {
    dispatch(actions: BroadcastAction[]): void
}
interface ClientFunctions {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();