import { createTheme } from "@mui/material";

export const brand = {
    forest: '#29524A',
    sage: '#94A187',
    taupe: '#C5AFA0',
    rose: '#E9BCB7',
    ink: '#06070E'
};

export const theme = createTheme({
    palette: {
        primary: {
            main: brand.forest,
            dark: '#1C3A34',
            light: '#3E6B61',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: brand.sage,
            dark: '#75836A',
            light: '#ADB8A2',
            contrastText: brand.ink
        },
        warning: {
            main: brand.taupe,
            contrastText: brand.ink
        },
        info: {
            main: brand.rose,
            contrastText: brand.ink
        },
        background: {
            default: '#F4F2ED',
            paper: '#FFFFFF'
        },
        text: {
            primary: brand.ink,
            secondary: '#4A5049'
        }
    },
    shape: {
        borderRadius: 12
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h4: { fontWeight: 700 },
        button: { textTransform: 'none', fontWeight: 600 }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    boxShadow: 'none'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 600
                }
            }
        }
    }
});
