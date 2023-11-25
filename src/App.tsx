import { MantineProvider } from "@mantine/core";
import { Home } from "./pages/home";
import { colors } from "./constants/colors";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "IBM Plex Mono",
        primaryShade: 5,
        primaryColor: "beige",
        colors: colors,
        globalStyles: (theme) => ({
          body: {
            ...theme.fn.fontStyles(),
            backgroundColor: theme.colors.beige[1],
            color: theme.colors.beige[9],
          },
        }),
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Home />
    </MantineProvider>
  );
}

export default App;
