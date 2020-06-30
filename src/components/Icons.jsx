import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete'

import {Icon, Button, IconButton} from '@material-ui/core'

const Icons = () => {
    return (
        <div>
            
            {/* icono de svg */}
            <DeleteIcon 
                color="primary"
            />



            {/* boton de span */}
            <Icon>
                android
            </Icon>

            <Button 
                variant="contained" 
                color="secondary"
                startIcon={<DeleteIcon />}

            >
              Delete con icono de papelera
            </Button>

            <Button 
                variant="contained" 
                color="secondary"
                endIcon={
                    <Icon>
                        android
                    </Icon>}

            >
              Delete con icono de android
            </Button>

            <p></p>

            <IconButton 
                aria-label="delete" 
            >
                <DeleteIcon 
                    color="primary"
                />
            </IconButton>

        </div>
    )
}

export default Icons
