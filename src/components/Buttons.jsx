import React from 'react'

import Button from '@material-ui/core/Button'

const Buttons = () => {
    return (
        <div>
            
            <Button color="primary">
            Color Primary
            </Button>

            <Button 
            color="secondary"
            variant="outlined"
            >
            Color secondary
            </Button>

            <Button 
            color="secondary"
            variant="contained"
            >
            Color secondary
            </Button>

            <p>lorem</p>

            <Button 
            color="secondary"
            variant="contained"
            disableElevation
            >
            Color secondary disableElevation
            </Button>


            <p>lorem</p>

            <Button 
            color="secondary"
            variant="contained"
            href="https://google.com"
            >
            Ir a Google
            </Button>

            <p>lorem</p>

            <Button 
            color="secondary"
            variant="contained"
            fullWidth
            >
            full Width
            </Button>

            
            <p>lorem</p>

            <Button 
            color="secondary"
            variant="contained"
            size="large"
            >
            large
            </Button>

            <Button 
            color="secondary"
            variant="contained"
            size="medium"
            >
            medium
            </Button>

            <Button 
            color="secondary"
            variant="contained"
            size="small"
            >
            small
            </Button>
        </div>
    )
}

export default Buttons
