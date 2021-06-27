import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    avatar: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
}));

const PertandinganTemplate = ({ currentPage }) => {
    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    aria-label="this is table All Teams"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="center">Club</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Play Games</TableCell>
                            <TableCell align="center">Win</TableCell>
                            <TableCell align="center">Lost</TableCell>
                            <TableCell align="center">Total Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPage.map((item) => (
                            <TableRow key={item.team.id}>
                                <TableCell component="th" scope="row">
                                    {item.position}
                                </TableCell>
                                <TableCell align="center">
                                    <Avatar
                                        className={classes.avatar}
                                        alt={item.team.name}
                                        src={item.team.crestUrl}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    {item.team.name}
                                </TableCell>
                                <TableCell align="center">
                                    {item.playedGames}
                                </TableCell>
                                <TableCell align="center">{item.won}</TableCell>
                                <TableCell align="center">
                                    {item.lost}
                                </TableCell>
                                <TableCell align="center">
                                    {item.points}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PertandinganTemplate;
