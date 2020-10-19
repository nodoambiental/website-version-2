import { Theme } from "@material-ui/core"
import { SvgIconComponent } from "@material-ui/icons"
import { IConfiguration } from "overmind"

export type TState = {
    theme: Theme
    icons: Record<string, SvgIconComponent>
}

export interface ICustomConfiguration extends IConfiguration {
    state: TState
    actions: {
        swapTheme: ({ state }: Record<string, any>) => void
    }
}
