import { ThemeProvider } from "@material-ui/core"
import React from 'react';
import { Provider } from "overmind-react"
import * as Overmind from "./src/state"

export const wrapRootElement = ({ element }) => {

  return (

    <Provider value={Overmind.creator}>
      <ThemeProvider theme={Overmind.state.theme}>
        {element}
      </ThemeProvider>
    </Provider>
  );
};
