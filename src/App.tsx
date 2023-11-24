import { MantineProvider } from "@mantine/core";
import { Home } from "./pages/home";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "IBM Plex Mono",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Home />
    </MantineProvider>
  );
}

export default App;
