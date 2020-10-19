import { Brightness3, BrightnessHigh } from "@material-ui/icons"
import { ICustomConfiguration } from "./typings"

const swapTheme = ({ state }: ICustomConfiguration): void => {
    if (state.theme.palette.type === "light") {
        state.theme.palette.type = "dark"
        state.icons.invertColorsButton = BrightnessHigh
    } else {
        state.theme.palette.type = "light"
        state.icons.invertColorsButton = Brightness3
    }
}

export const actions = {
    swapTheme,
}
