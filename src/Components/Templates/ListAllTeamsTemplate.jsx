import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Avatar,
    Box,
    Button,
    makeStyles,
} from "@material-ui/core";
import { Delete, More } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    removeUnderline: {
        textDecoration: "none",
    },
}));

const ListAllTeamsTemplate = ({ dataTeams, handleDeleteFavorite }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <Box component="div" m={2}>
            <List component="div" aria-label="list-all-teams">
                {dataTeams.map((team) => {
                    const date = new Date(team.lastUpdated);

                    return (
                        <div key={team.id}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Avatar src={team.crestUrl} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={team.name}
                                    secondary={`lastUpdated: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                                />
                                {location.pathname === "/favoriteteams" ? (
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        onClick={() =>
                                            handleDeleteFavorite(team.id)
                                        }
                                        startIcon={<Delete />}
                                    >
                                        Delete
                                    </Button>
                                ) : (
                                    <Link
                                        to={`/team/detail/${team.id}`}
                                        className={classes.removeUnderline}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<More />}
                                        >
                                            Detail
                                        </Button>
                                    </Link>
                                )}
                            </ListItem>
                            <Divider />
                        </div>
                    );
                })}
            </List>
        </Box>
    );
};

export default ListAllTeamsTemplate;
