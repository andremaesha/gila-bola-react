import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import SkeletonTemplate from "./SkeletonTemplate";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    avatar: {
        textAlign: "center",
    },
    centerTextCircle: {
        marginLeft: theme.spacing(1),
    },
    centerText: {
        textAlign: "center",
    },
    SkeletonPagination: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
}));

const SkeletonPertandingan = () => {
    const classes = useStyles();
    const [SkeletonData] = useState([1, 2, 3, 4, 5]);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    aria-label="this is table All Teams"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <SkeletonTemplate
                                    className={classes.centerText}
                                    SkeletonVariant="text"
                                    width="20px"
                                />
                            </TableCell>
                            <TableCell align="center">
                                <SkeletonTemplate
                                    className={classes.centerTextCircle}
                                    SkeletonVariant="text"
                                    width="20px"
                                />
                            </TableCell>
                            <TableCell align="center">
                                <SkeletonTemplate
                                    className={classes.centerText}
                                    SkeletonVariant="text"
                                    width="100px"
                                />
                            </TableCell>
                            <TableCell align="center">
                                <SkeletonTemplate
                                    className={classes.centerText}
                                    SkeletonVariant="text"
                                    width="20px"
                                />
                            </TableCell>
                            <TableCell align="center">
                                <SkeletonTemplate
                                    className={classes.centerText}
                                    SkeletonVariant="text"
                                    width="20px"
                                />
                            </TableCell>
                            <TableCell align="center">
                                <SkeletonTemplate
                                    className={classes.centerText}
                                    SkeletonVariant="text"
                                    width="20px"
                                />
                            </TableCell>
                            <TableCell align="center">
                                <SkeletonTemplate
                                    className={classes.centerText}
                                    SkeletonVariant="text"
                                    width="20px"
                                />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {SkeletonData.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    <SkeletonTemplate
                                        SkeletonVariant="text"
                                        width="20px"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <SkeletonTemplate
                                        className={classes.avatar}
                                        SkeletonVariant="circle"
                                        width="40px"
                                        height="40px"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <SkeletonTemplate
                                        SkeletonVariant="text"
                                        width="100px"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <SkeletonTemplate
                                        SkeletonVariant="text"
                                        width="20px"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <SkeletonTemplate
                                        className={classes.centerText}
                                        SkeletonVariant="text"
                                        width="20px"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <SkeletonTemplate
                                        className={classes.centerText}
                                        SkeletonVariant="text"
                                        width="20px"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <SkeletonTemplate
                                        className={classes.centerText}
                                        SkeletonVariant="text"
                                        width="20px"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <SkeletonTemplate
                className={classes.SkeletonPagination}
                SkeletonVariant="text"
                width="300px"
                height="50px"
            />
        </div>
    );
};

export default SkeletonPertandingan;
