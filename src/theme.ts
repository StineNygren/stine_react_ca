import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary:{
            main: "#FF008A",
            light: "#FFD3B6",
            dark: "#EC368D",
            contrastText: "#FFFFFF"

        }
    }, 
    components:{
        MuiFormHelperText:{
            styleOverrides:{
                root:{
                    color: "red"
                }
            }
        }
    },
    typography:{
        fontFamily: `"Noto Sans", sans-serif;`,

    }
})