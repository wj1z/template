import { Networking } from "@flamework/networking";
import { BroadcastAction } from "@rbxts/reflex";

interface ClientToServerEvents {
    start(): void
}
interface ClientToServerFunctions {}

interface ServerToClientEvents {
    dispatch(actions: BroadcastAction[]): void
}
interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();