import { createOvermind } from "overmind"
import { createActionsHook, createHook, createStateHook } from "overmind-react"
import { actions } from "./actions"
import { initialization } from "./initialization"
import { state } from "./statedef"
import { ICustomConfiguration } from "./typings"

export const creator = createOvermind<ICustomConfiguration>(
    {
        onInitialize: initialization,
        state,
        actions,
    },
    { devtools: true } // TODO:Patch Add a conditional to set this to false when building prod
)

export const useGlobal = createHook<typeof creator>()
export const useState = createStateHook<typeof creator>()
export const useActions = createActionsHook<typeof creator>()
