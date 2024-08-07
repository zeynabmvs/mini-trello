import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Dashboard from "components/Dashboard";
import BaseModal from "components/BaseModal.jsx"
import {useMemo} from "react";
import {selectColorMode} from "features/colorModeSlice.js";
import {useSelector} from "react-redux";
import {getDesignTokens} from "src/configs/theme.jsx";


function App() {
	const mode = useSelector(selectColorMode)
	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme>
					<Dashboard/>
					<BaseModal/>
				</CssBaseline>
			</ThemeProvider>
		</>
	);
}

export default App;
