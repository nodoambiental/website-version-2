import { IOnInitialize } from "overmind"
import * as Overmind from "./statedef"
import { ICustomConfiguration } from "./typings"

export const initialization: IOnInitialize<ICustomConfiguration> = (
    { state, actions, effects },
    overmind
) => {
    state = Overmind.state
}
