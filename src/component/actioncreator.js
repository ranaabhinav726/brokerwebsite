import axios from "axios";
import { APIS } from "../utils/apifactory";


export const getBannerApi = (callBack, error) => {
    const headerConfig = {
        headers: {},
    };
    axios.get(APIS.GET_SLIDER_API, headerConfig)
        .then(res => {
            callBack(res.data)
        })
        .catch(e => {
            error(e.res)
        })
}
export const getBannerSecondApi = (callBack, error) => {
    const headerConfig = {
        headers: {},
    };
    axios.get(APIS.GET_BANNER_API, headerConfig)
        .then(res => {
            callBack(res.data)
        })
        .catch(e => {
            error(e.res)
        })
}
