import {localStore} from '../constants';

export let formatDate = date => {
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let year = date.getFullYear();

    return year + '-' + month + '-' + day;
};

export const defaultDate = () => {
    if (localStore && localStore.date) {
        return new Date(localStore.date);
    } else {
        return new Date();
    }
};