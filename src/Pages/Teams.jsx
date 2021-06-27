import CONFIG from "../Global/config";
import useFetchApi from "../FetchingApi/useFetch";
import ListAllTeamsComponent from "../Components/ListAllTeamsComponent";
import { LinearProgress } from "@material-ui/core";

const Teams = () => {
    const { data, isPending, errorMessage } = useFetchApi(
        CONFIG.BASE_URL,
        CONFIG.API_KEY
    );

    return (
        <div>
            {isPending && <LinearProgress color="secondary" />}
            {data && <ListAllTeamsComponent AllTeams={data.teams} />}
            {errorMessage && <h1>found some error please try again</h1>}
        </div>
    );
};

export default Teams;
