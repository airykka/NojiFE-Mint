import axios from "axios";
import { getFromSession } from "../utils/utils";

axios.defaults.baseURL = "https://noji.so/api/v1";

axios.defaults.headers.post["Content-Type"] = "application/json";

/**
 * This is an interceptor for when token has expired and request is trying to be made
 */
if (axios?.interceptors?.response) {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        sessionStorage.clear();
        if (window.location.href.includes("admin")) {
          window.location = `/`;
        }
      }
    }
  );
}

/**
 * To Login as Admin
 * @param {{username: string, password: string}} data
 * @returns {object}
 */
export const loginAdmin = async (data) => {
  try {
    let result = await axios.post("/auth/admin/login", data);
    if (result.status === 200 || result.status === 201) {
      return result.data;
    }
  } catch (error) {
    return error.response;
  }
};

/**
 * Gets the list players on the platform
 * @param {string} searchText
 * @param {string} sortField
 * @param {"asc"|"desc"} sortType
 * @param {number} take
 * @param {number} skip
 * @returns
 */
export const getPlayersList = async (
  searchText = "",
  sortField = "createdAt",
  sortType = "asc",
  take = 50,
  skip = 0
) => {
  try {
    let result = await axios.get(
      `/players?query=${searchText}&sort[field]=${sortField}&sort[type]=${sortType}&take=${take}&skip=${skip}`,
      {
        headers: {
          Authorization: `Bearer ${getFromSession("adminToken")}`,
        },
      }
    );

    return result?.data;
  } catch (error) {
    return error.response;
  }
};

/**
 * To POST and add player to the platform by admin
 * @param {string[]} data
 * @returns
 */
export const addNewPlayers = async (data) => {
  try {
    const result = await axios.post(
      "/players",
      { names: data },
      {
        headers: {
          Authorization: `Bearer ${getFromSession("adminToken")}`,
        },
      }
    );
    if (result.status === 204) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error.response;
  }
};

/**
 *
 * @param {{names: string[], amount: string}} data
 * @returns
 */
export const AddCowriesToPlayers = async (data) => {
  try {
    const result = await axios.post("/players/cowries", data, {
      headers: {
        Authorization: `Bearer ${getFromSession("adminToken")}`,
      },
    });

    if (result?.status === 204) {
      return true;
    }
  } catch (error) {
    return error.response;
  }
};

/**
 * To GET the list of fastest players in the platform
 * @returns
 */
export const getFastestStat = async () => {
  try {
    const result = await axios.get(
      "/stats/fastest-user-clicks?skip=0&take=50",
      {
        headers: {
          Authorization: `Bearer ${getFromSession("adminToken")}`,
        },
      }
    );
    if (result?.status === 200) {
      return result?.data;
    }
  } catch (error) {
    return error?.response;
  }
};

/**
 * To GET list of clans and the count of member in each clan
 * @returns
 */
export const getClanStat = async () => {
  try {
    const result = await axios.get("/stats/clans", {
      headers: {
        Authorization: `Bearer ${getFromSession("adminToken")}`,
      },
    });
    if (result?.status === 200) {
      return result.data;
    }
  } catch (error) {
    return error?.response;
  }
};

/**
 *
 * @param {{action: string, clan: string, playerCount: number, message: string}} data
 * @returns
 */
export const createEvents = async (data) => {
  try {
    const result = await axios.post("/events", data, {
      headers: {
        Authorization: `Bearer ${getFromSession("adminToken")}`,
      },
    });

    if (result?.status === 204) {
      return true;
    }
  } catch (error) {
    return error?.response;
  }
};

////////////////////////PLAYER ENDPOINTS CONSUMPTIONS////////////////////////////////////////
/**
 * To post and initialize player name
 * @param {string} playerName
 * @returns {object}
 */
export const initializePlayer = async (playerName) => {
  try {
    const result = await axios.post("/player/init", { name: playerName });
    if (result.status === 204) {
      return true;
    }
  } catch (error) {
    return error.response;
  }
};

/**
 *
 * @param {{name: string, pin: string}} data
 * @returns
 */
export const loginPlayer = async (data) => {
  try {
    const result = await axios.post("/auth/user/login", data);
    if (result?.status === 200) {
      return result?.data;
    }
  } catch (error) {
    return error.response;
  }
};

/**
 * To GET the structure of the sacred word of the day
 * @returns
 */
export const getSacredWordStructure = async () => {
  try {
    const result = await axios.get("/platform/words-of-the-day/structure", {
      headers: {
        Authorization: `Bearer ${getFromSession("playerToken")}`,
      },
    });

    if (result?.status === 200) {
      return result.data;
    }
  } catch (error) {
    return error.response;
  }
};

/**
 *
 * @param {{words: string, token: string}} data
 * @returns
 */
export const submitSacredWord = async (data) => {
  try {
    const result = await axios.post("/platform/words-of-the-day/verify", data, {
      headers: {
        Authorization: `Bearer ${getFromSession("playerToken")}`,
      },
    });
    if (result?.status === 200) {
      return result?.data;
    }
  } catch (error) {
    return error.response;
  }
};

/**
 * Check if player can play or not
 * @returns
 */
export const checkIfPlayed = async () => {
  try {
    const result = await axios.get("/platform/words-of-the-day/can-user-play", {
      headers: {
        Authorization: `Bearer ${getFromSession("playerToken")}`,
      },
    });

    if (result?.status === 200) {
      return result?.data;
    }
  } catch (error) {
    return error.response;
  }
};

export const getPlayerScores = async () => {
  try {
    const result = await axios.get("/player/data", {
      headers: {
        Authorization: `Bearer ${getFromSession("playerToken")}`,
      },
    });

    if (result?.status === 200) {
      return result?.data;
    }
  } catch (error) {
    return error.response;
  }
};
