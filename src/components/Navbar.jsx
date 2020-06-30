import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles, IconButton, Button} from "@material-ui/core"

import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      }
    },
    title:{
      flexGrow:1
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width:`calc(100% - ${240}px)`,
        marginLeft: 240,
      }
    },
}))

const Navbar = (props) => {

    const classes = useStyles()

    return (
            <AppBar className={classes.appBar}>
              <Toolbar>

                <IconButton 
                  color="inherit" 
                  aria-label="menu" 
                  className={classes.menuButton}
                  onClick={ () => props.accionAbrir()}
                >
                  <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={classes.title}>
                  bluuweb
                </Typography>

                <Button variant="text" color="inherit">
                  LOGIN
                </Button>

              </Toolbar>
            </AppBar>

    )
}

export default Navbar
