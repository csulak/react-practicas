import React from 'react'

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from "@material-ui/core" 

import AdbIcon from '@material-ui/icons/Adb';
import AddAlertIcon from '@material-ui/icons/AddAlert';

const Listas = () => {
    return (
        <div>
            <List components="nav">
                <ListItem button>
                    <ListItemIcon>
                        <AdbIcon />
                    </ListItemIcon>
                    <ListItemText primary="mi primer elemento"/>
                </ListItem>

                <ListItem button>
                    
                    <ListItemIcon>
                        <AddAlertIcon />
                    </ListItemIcon>

                    <ListItemText primary="mi segundo element"/>
                        
                </ListItem>

                <Divider />

            </List>
        </div>
    )
}

export default Listas
