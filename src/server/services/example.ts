import { OnStart, Service } from "@flamework/core";

@Service()
export class ExampleService implements OnStart {
    onStart(): void {}
}