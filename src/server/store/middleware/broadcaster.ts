import { ProducerMiddleware, createBroadcaster } from "@rbxts/reflex";
import { Events } from "server/networking";
import { shared_slices } from "shared/store";

export function broadcaster_middleware(): ProducerMiddleware {
    const broadcaster = createBroadcaster({
        producers: shared_slices,
        dispatch: (player, actions) => Events.dispatch.fire(player, actions)
    })

    Events.start.connect(player => broadcaster.start(player));

    return broadcaster.middleware;
}