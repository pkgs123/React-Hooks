import React, { Component } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppChild from './AppChild';

const useStyles = ((theme) => ({
    root: {
        flexGrow: 1,
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    title: {
        flexGrow: 1,
    },
}));


class App extends Component {

    render() {
        const classes = useStyles();
        return (
            <>
                <Grid container>
                    <Hidden smUp>
                        <Grid item xs={12}>
                            <Grid item xs={8}>
                                1st Grid Item
                            </Grid>
                            <Grid item xs={4}>
                                2nd Grid Item
                            </Grid>
                            Hi Prashant
                   <div className={classes.root}>
                                <AppBar position="static">
                                    <Toolbar>
                                    </Toolbar>
                                </AppBar>
                            </div>
                        </Grid>
                    </Hidden>
                    <Hidden xsDown>
                        <Grid item sm={12} md={12} lg={12}>
                            Thanks Priyanka
                   </Grid>
                   
                    </Hidden>
                </Grid>
                <AppChild/>
            </>
        )
    }
}
export default withStyles(useStyles)(App);
