const CONFIG = {
    API_KEY: "6f1a2f3f2aa24ae3838ae8db31015791",
    BASE_URL: "https://api.football-data.org/v2/teams/",
    EVENTS: "https://api.football-data.org/v2/competitions/2021/standings",
    DETAIL: (id) => `https://api.football-data.org/v2/teams/${id}`,

    DATABASE_NAME: "favorite-team",
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: "team",
};

export default CONFIG;
