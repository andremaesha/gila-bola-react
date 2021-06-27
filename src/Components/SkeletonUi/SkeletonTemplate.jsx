import { Skeleton } from "@material-ui/lab";

const SkeletonTemplate = ({ SkeletonVariant, width, height, className }) => {
    return (
        <div>
            <Skeleton
                className={className}
                variant={SkeletonVariant}
                width={width}
                height={height}
                animation="wave"
            />
        </div>
    );
};

export default SkeletonTemplate;
