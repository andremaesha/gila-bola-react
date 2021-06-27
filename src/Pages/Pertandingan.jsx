import useFetchApi from "../FetchingApi/useFetch";
import TablePertandingan from "../Components/TablePertandingan";
import CONFIG from "../Global/config";
import SkeletonPertandingan from "../Components/SkeletonUi/SkeletonPertandingan";

const Pertandingan = () => {
    const { data, isPending, errorMessage } = useFetchApi(
        CONFIG.EVENTS,
        CONFIG.API_KEY
    );

    return (
        <div>
            {isPending && <SkeletonPertandingan />}
            {data && <TablePertandingan dataPertandingan={data} />}
            {errorMessage && <h1>found some error please try again</h1>}
        </div>
    );
};

export default Pertandingan;
