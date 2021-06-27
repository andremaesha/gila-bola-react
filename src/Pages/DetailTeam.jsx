import CONFIG from "../Global/config";
import { useParams } from "react-router-dom";
import useFetchApi from "../FetchingApi/useFetch";
import DetailComponent from "../Components/DetailComponent";
import LinearLoadingTemplate from "../Components/Templates/LinearLoadingTemplate";

const DetailTeam = () => {
    const { id } = useParams();
    const { data, isPending, errorMessage } = useFetchApi(
        CONFIG.DETAIL(id),
        CONFIG.API_KEY
    );

    return (
        <div>
            {isPending && <LinearLoadingTemplate />}
            {data && <DetailComponent DataDetail={data} />}
            {errorMessage && (
                <h1>
                    Found some error please try again later or refresh the
                    browser
                </h1>
            )}
        </div>
    );
};

export default DetailTeam;
