import { LinearProgress } from "@material-ui/core";
import { useState, useEffect } from "react";

const LinearLoadingTemplate = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <LinearProgress variant="determinate" value={progress} />;
};

export default LinearLoadingTemplate;
