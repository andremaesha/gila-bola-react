import Appbar from "../Appbar";
import { makeStyles } from "@material-ui/core";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(9),
    },
}));

const Layout = ({ children }) => {
    const location = useLocation();
    const classes = useStyles();

    return (
        <div>
            {/* App Bar */}
            <Appbar />
            <div className={classes.root}>{children}</div>
            {/* Footer */}

            {location.pathname !== "/favoriteteams" ? <Footer /> : null}
        </div>
    );
};

export default Layout;
