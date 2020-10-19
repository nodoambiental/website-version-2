import { createMuiTheme } from "@material-ui/core"
import { brown, indigo } from "@material-ui/core/colors"
import { Brightness3 } from "@material-ui/icons"
import { TState } from "./typings"

export const state: TState = {
    theme: createMuiTheme({
        palette: {
            primary: {
                main: indigo[200],
            },
            secondary: {
                main: brown[300],
            },
            contrastThreshold: 3,
            type: "light",
        },
    }),
    icons: {
        invertColorsButton: Brightness3,
    },
}
