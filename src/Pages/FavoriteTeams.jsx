import { useState, useEffect } from "react";
import FavoriteTeamIDB from "../IDB/favorite-team-idb";
import ListAllTeamsTemplate from "../Components/Templates/ListAllTeamsTemplate";

const FavoriteTeams = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        FavoriteTeamIDB.getAllTeams().then((favorite) => {
            setData(favorite);
        });
    }, []);

    const handlerClickDelete = (id) => {
        FavoriteTeamIDB.deleteTeam(id);
        const newData = data.filter((data) => data.id !== id);
        setData(newData);
    };

    return (
        <div>
            {data.length === 0 ? (
                <h1>No Favorite</h1>
            ) : (
                <ListAllTeamsTemplate
                    dataTeams={data}
                    handleDeleteFavorite={handlerClickDelete}
                />
            )}
        </div>
    );
};

export default FavoriteTeams;
