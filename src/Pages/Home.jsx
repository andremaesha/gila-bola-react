import {
    makeStyles,
    Card,
    CardActions,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Container,
} from "@material-ui/core";
import imgFirst from "../images/imageFirst.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
    },
    media: {
        height: 300,
    },
    titleCard: {
        textAlign: "center",
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <Card>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imgFirst}
                        title="Football"
                        src="img"
                    />
                    <CardContent>
                        <Typography
                            className={classes.titleCard}
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            Gila Bola
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            color="textSecondary"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat quibusdam repellendus reprehenderit
                            voluptas dolorum blanditiis nesciunt asperiores,
                            incidunt esse aspernatur quia minima qui inventore
                            voluptates consequatur non, repudiandae debitis!
                            Vel.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
            </Card>
        </Container>
    );
};

export default Home;
