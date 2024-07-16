import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./mui-theme";
import { PrimeReactProvider } from "primereact/api";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {Story()}
      </ThemeProvider>
    ),
    (Story) => (
      <PrimeReactProvider value={{ unstyled: false }}>
        {Story()}
      </PrimeReactProvider>
    ),
  ],
};

export default preview;
