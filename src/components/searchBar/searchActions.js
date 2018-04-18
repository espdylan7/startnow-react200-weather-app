import axios from "axios";
import moment from 'moment';

export function updateCityInput(CityInput){
    // const APPID = '74accdf828a6548309c02e7d2d6ca63f'
    const payload = axios.get(`/api/${CityInput}`);
    return {
        type: 'UPDATE_CITY_INPUT',
        payload
        
    }

}

export function addHistory(CityInput) {
    return {
        type: 'ADD_HISTORY',
        payload: {
            CityInput, date: moment().format('MMMM do YYYY, h:mm:ss a')
        }
    }
}