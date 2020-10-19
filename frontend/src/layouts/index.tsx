import { IconButton } from "@material-ui/core"
import * as React from "react"
import Helmet from "react-helmet"
import * as Overmind from "../state"

const Header: React.FC = (): JSX.Element => {
    const { swapTheme } = Overmind.useActions()
    const { icons } = Overmind.useState()
    const Icon = icons.invertColorsButton
    return (
        <div>
            <h1>Encabezado</h1>
            <IconButton onClick={swapTheme}>
                <Icon />
            </IconButton>
        </div>
    )
}
export const DefaultLayout: React.FC = ({ children }): JSX.Element => {
    return (
        <div>
            <Helmet
                title="Gatsby Default Starter"
                meta={[
                    { name: "description", content: "Sample" },
                    { name: "keywords", content: "sample, something" },
                ]}
            />

            <Header />
            <div
                style={{
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "0px 1.0875rem 1.45rem",
                    paddingTop: 0,
                }}
            >
                {children}
            </div>
        </div>
    )
}
