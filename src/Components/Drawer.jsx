import {
    makeStyles,
    SwipeableDrawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import menuItems from "./Data/menuItems";

const useStyles = makeStyles((theme) => ({
    list: {
        width: "250px",
    },
    removeUnderline: {
        textDecoration: "none",
    },
    drawerText: {
        color: "black",
        marginTop: theme.spacing(1),
    },

    drawerTitle: {
        margin: theme.spacing(2),
        textAlign: "center",
    },
    active: {
        background: "gray",
        color: "black",
    },
    triggerDrawer: {
        color: "white",
    },
}));

const Drawer = () => {
    const classes = useStyles();
    const [triggerDrawer, setTriggerDrawer] = useState(false);
    const location = useLocation();

    const toggleDrawer = (open) => {
        setTriggerDrawer(open);
    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <Typography
                className={classes.drawerTitle}
                variant="h6"
                component="h1"
            >
                Gila Bola
            </Typography>

            <Divider variant="middle" />
            <List>
                {menuItems.map((item) => (
                    <Link
                        to={item.path}
                        className={classes.removeUnderline}
                        key={item.id}
                    >
                        <ListItem
                            button
                            className={
                                location.pathname === item.path
                                    ? classes.active
                                    : null
                            }
                        >
                            <ListItemText className={classes.drawerText}>
                                {item.text}
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Button
                className={classes.triggerDrawer}
                onClick={() => toggleDrawer(true)}
            >
                {triggerDrawer ? <Close /> : <Menu />}
            </Button>
            <SwipeableDrawer
                anchor="right"
                open={triggerDrawer}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
};

export default Drawer;
