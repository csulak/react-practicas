import React from 'react'
import Navbar from './Navbar'
import DrawerComponent from './DrawerComponent'

import {
    makeStyles, Drawer, Hidden

} from "@material-ui/core"
import Cajita from './Cajita'

const estilos = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}))

const Contenedor = () => {

    const classes = estilos()

    const[abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>

            <Navbar accionAbrir={accionAbrir}/>

            <Hidden xsDown>
                <DrawerComponent 
                    variant="permanent"
                    open={true}
                />
            </Hidden>

            <Hidden smUp>
                <DrawerComponent 
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>


            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                    <Cajita />
                
            </div>
        </div>
    )
}

export default Contenedor
