// import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    Hidden,
    useScrollTrigger,
    Slide,
} from "@material-ui/core";
import menuItems from "./Data/menuItems";
import Drawer from "./Drawer";

const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    navMenu: {
        marginLeft: theme.spacing(2),
        color: "white",
        textDecoration: "none",
    },
    removeUnderline: {
        textDecoration: "none",
    },
    active: {
        background: "gray",
        color: "white",
        marginLeft: theme.spacing(2),
    },
}));

const Appbar = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.root}>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <Hidden smUp>
                            <Drawer />
                        </Hidden>
                        <Typography
                            variant="h5"
                            component="h1"
                            className={classes.title}
                        >
                            Gila Bola
                        </Typography>

                        <div>
                            <Hidden only="xs">
                                {menuItems.map((item) => (
                                    <Link
                                        to={item.path}
                                        key={item.id}
                                        className={classes.removeUnderline}
                                    >
                                        <Button
                                            className={
                                                location.pathname === item.path
                                                    ? classes.active
                                                    : classes.navMenu
                                            }
                                        >
                                            {item.text}
                                        </Button>
                                    </Link>
                                ))}
                            </Hidden>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Appbar;
