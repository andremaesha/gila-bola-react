import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fab } from "@material-ui/core";
import FavoriteTeamIDB from "../../IDB/favorite-team-idb";
import TemplateFabCreator from "./Template-FAB-creator";

const FabButtonTemplate = ({ data }) => {
    const [saveToIDB, setSaveToIDB] = useState(null);
    const [favorite, setFavorite] = useState(false);

    const { id } = useParams();
    const idForIDB = parseInt(id);

    useEffect(() => {
        setSaveToIDB(data);
    }, [data]);

    const handleClick = () => {
        setFavorite(!favorite);
        if (favorite) {
            FavoriteTeamIDB.deleteTeam(idForIDB).then(() => setFavorite(false));
        } else {
            FavoriteTeamIDB.putTeam(saveToIDB);
        }
    };

    FavoriteTeamIDB.getTeam(idForIDB).then((data) => {
        if (!data) return;
        setFavorite(true);
    });

    return (
        <div>
            <Fab onClick={handleClick}>
                {favorite
                    ? TemplateFabCreator.Favorite
                    : TemplateFabCreator.UnFavorite}
            </Fab>
        </div>
    );
};

export default FabButtonTemplate;
