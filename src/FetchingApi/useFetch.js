import { useState, useEffect } from "react";
import axios from "axios";

const useFetchApi = (url, token) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const getData = async () => {
            try {
                const res = await axios.get(url, {
                    headers: {
                        "X-Auth-Token": `${token}`,
                    },
                    cancelToken: source.token,
                });

                setData(res.data);
                setIsPending(false);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log("Error: ", e.message);
                }
                setErrorMessage(e.message);
                setIsPending(false);
            }
        };

        getData();

        return () => {
            source.cancel("axios request cancelled");
        };
    }, [url, token]);

    return {
        data,
        isPending,
        errorMessage,
    };
};

export default useFetchApi;
