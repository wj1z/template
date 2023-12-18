import { Flamework } from "@flamework/core";
import { store } from "./store";

store.set_shared_number(1);
store.set_shared_string("Server!");

Flamework.addPaths("src/server/services", "src/server/components", "src/shared/components");
Flamework.ignite();