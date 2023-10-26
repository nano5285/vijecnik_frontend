import axios from "axios";

axios.defaults.baseURL = "http://45.84.0.116:5005";

const signInUser = async (props) => {
    try {
        var result = await axios.post("/api/login/", props, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        return error.response
    }
}

const getAgenda = async (props) => {
    try {
        var result = await axios.get("/api/get_agenda/", props, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        return error.response
    }
}

const getUser = async (props) => {
    try {
        var result = await axios.post("/api/users/", props, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        return error.response
    }
}

const handleVote = async (props) => {
    try {
        var result = await axios.post("/api/vote/", props, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        return error.response
    }
}

const getVote = async (props) => {
    try {
        var result = await axios.get("/api/get_vote/", props, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        return error.response
    }
}


const startVote = async (props) => {
    try {
        var result = await axios.post("/api/start_vote/", props, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        return error.response
    }
}


const closeVote = async (props) => {
    try {
        var result = await axios.post("/api/close_vote/", props, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        return error.response
    }
}

const resetVote = async (props) => {
    try {
        var result = await axios.post("/api/reset_vote/", props, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        return error.response
    }
}


export { signInUser, getAgenda, getUser, handleVote, getVote, startVote, closeVote, resetVote };
