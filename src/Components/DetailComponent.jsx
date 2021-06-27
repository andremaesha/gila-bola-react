import { makeStyles, Grid, Typography, Paper } from "@material-ui/core";
import FabButtonTemplate from "./Templates/FabButtonTemplate";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "whiteSmoke",
    },
    rootSecond: {
        overflow: "hidden",
    },
    CenterImage: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "20%",
    },
    paper: {
        color: theme.palette.text.secondary,
    },
    FAB: {
        position: "fixed",
        bottom: "16px",
        right: "16px",
    },
}));

const DetailComponent = ({ DataDetail }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img
                        className={classes.CenterImage}
                        src={DataDetail.crestUrl}
                        alt={DataDetail.name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography align="center" component="h1" variant="h4">
                            {DataDetail.name}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid container className={classes.rootSecond}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography
                                align="center"
                                component="h1"
                                variant="h5"
                            >
                                Information Team
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography
                                align="center"
                                component="h1"
                                variant="body1"
                            >
                                {DataDetail.phone ? DataDetail.phone : "Phone Number is not available"}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography
                                align="center"
                                component="h1"
                                variant="body1"
                            >
                                {DataDetail.email
                                    ? DataDetail.email
                                    : "Email No available"}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            {/* this line save button to IDB */}
            <FabButtonTemplate data={DataDetail} />
        </div>
    );
};

export default DetailComponent;
