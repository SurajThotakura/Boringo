import { MantineProvider } from "@mantine/core";
import { Home } from "./pages/home";
import { colors } from "./constants/colors";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Game } from "./pages/game";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/game",
      element: <Game />,
    },
  ]);
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
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
