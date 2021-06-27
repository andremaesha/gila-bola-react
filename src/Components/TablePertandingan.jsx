import { makeStyles } from "@material-ui/core";
import { SkipPrevious, SkipNext } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import PertandinganTemplate from "./Templates/PertandinganTemplate";

const useStyles = makeStyles((theme) => ({
    itemClass: {
        display: "inline-block",
        marginLeft: theme.spacing(4),
    },
    pagination: {
        marginTop: theme.spacing(2),
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "16px",
        color: "black",
    },
    activeLinkClass: {
        background: "#4CAF50",
        color: "white",
    },
    linkClass: {
        textDecoration: "none",
        fontSize: "20px",
        "&:hover": {
            background: "gray",
            width: "100%",
        },
    },
    linkClassFirst: {
        display: "none",
    },
    linkClassLast: {
        display: "none",
    },
    disabled: {
        background: "gray",
        color: "white",
    },
}));

const TablePertandingan = ({ dataPertandingan }) => {
    const [showPerPage] = useState(5);
    const [activePage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        setData(dataPertandingan.standings[0].table);
    }, [dataPertandingan]);

    const indexOfLastPage = activePage * showPerPage;
    const indexOfFirstPage = indexOfLastPage - showPerPage;
    const currentPage = data.slice(indexOfFirstPage, indexOfLastPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderData = <PertandinganTemplate currentPage={currentPage} />;

    return (
        <div>
            {renderData}

            <Pagination
                activePage={activePage}
                itemsCountPerPage={showPerPage}
                totalItemsCount={data.length}
                pageRangeDisplayed={10}
                onChange={handlePageChange}
                prevPageText="Prev"
                nextPageText="Next"
                firstPageText={<SkipPrevious />}
                lastPageText={<SkipNext />}
                innerClass={classes.pagination}
                itemClass={classes.itemClass}
                activeLinkClass={classes.activeLinkClass}
                activeClass={classes.activeClass}
                linkClass={classes.linkClass}
                linkClassFirst={classes.linkClassFirst}
                linkClassLast={classes.linkClassLast}
                disabledClass={classes.disabled}
            />
        </div>
    );
};

export default TablePertandingan;
