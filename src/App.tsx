import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core'
import { Home } from './pages/home'
import { colors } from './constants/colors'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Game } from './pages/game'
import { useState } from 'react'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/game',
			element: <Game />,
		},
	])

	const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{
					fontFamily: 'IBM Plex Mono',
					primaryShade: 5,
					primaryColor: 'beige',
					colors: colors,
					globalStyles: (theme) => ({
						body: {
							...theme.fn.fontStyles(),
							backgroundColor:
								colorScheme === 'dark'
									? theme.colors.beige[8]
									: theme.colors.beige[1],
							color: theme.colors.beige[9],
						},
					}),
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				<RouterProvider router={router} />
			</MantineProvider>
		</ColorSchemeProvider>
	)
}

export default App
