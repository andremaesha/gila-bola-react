import ListAllTeamsTemplate from "./Templates/ListAllTeamsTemplate";

const ListAllTeamsComponent = ({ AllTeams }) => {
    return <ListAllTeamsTemplate dataTeams={AllTeams} />;
};

export default ListAllTeamsComponent;
