import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider as CssVarsProvider } from '@mui/material/styles';

import { createTheme } from '@/styles/theme/create-theme';

export interface IThemeProviderProps {
    readonly children: React.ReactNode;
}

export function ThemeProvider({ children }: IThemeProviderProps): React.JSX.Element {
    const theme = createTheme();

    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            {children}
        </CssVarsProvider>
    );
}
