import React from 'react'
import Button from '@material-ui/core/Button'
import {ThemeProvider} from "@material-ui/core/styles"

import theme from "../temaConfig"
import { Typography } from '@material-ui/core'

const ButtonsEditingStyles = () => {
    return (
        <div>

            <ThemeProvider theme={theme}>

                <Button variant="contained" color="primary">
                    botón
                </Button>

                <Button variant="contained" color="secondary">
                    botón
                </Button>

                <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, dolorum officia? Eius, accusamus ea! Veniam et voluptatem eligendi maiores, nobis excepturi sapiente cumque eum, temporibus minus fuga eaque officia. Similique.
                </Typography>

            </ThemeProvider>
        </div>
    )
}

export default ButtonsEditingStyles
