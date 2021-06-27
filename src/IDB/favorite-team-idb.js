import { openDB } from "idb";
import CONFIG from "../Global/config";

const dbPromises = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(CONFIG.OBJECT_STORE_NAME, { keyPath: "id" });
    },
});

const FavoriteTeamIDB = {
    async getTeam(id) {
        if (!id) return;

        return (await dbPromises).get(CONFIG.OBJECT_STORE_NAME, id);
    },
    async getAllTeams() {
        return (await dbPromises).getAll(CONFIG.OBJECT_STORE_NAME);
    },
    async putTeam(team) {
        if (!team.hasOwnProperty("id")) return;

        return (await dbPromises).put(CONFIG.OBJECT_STORE_NAME, team);
    },
    async deleteTeam(id) {
        return (await dbPromises).delete(CONFIG.OBJECT_STORE_NAME, id);
    },
};

export default FavoriteTeamIDB;
