import axios from "axios";
import { BASE_URL } from "../config/api.config";

const getInfo = async () => {
    const response = await axios.get(BASE_URL);
    const info = { project: response.data.project, period: response.data.period };
    return info;
};

const getTasks = async () => {
    const response = await axios.get(BASE_URL);
    return response.data.chart;
};

const DataService = {
    getInfo,
    getTasks,
};

export default DataService;
