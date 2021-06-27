import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(16),
    },
    paragraf: {
        textAlign: "center",
        color: "#aaaaaa",
        textIndent: "10px",
    },
    dataSource: {
        color: "#db0000",
        textDecoration: "none",
        marginLeft: theme.spacing(1),
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <p className={classes.paragraf}>
                All Data obtained from
                <a
                    className={classes.dataSource}
                    href="https://www.football-data.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Football-data
                </a>
            </p>
        </footer>
    );
};

export default Footer;
