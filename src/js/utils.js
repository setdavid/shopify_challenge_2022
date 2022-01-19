import store from "../redux/configure-store";
import { APODS_STATUS_GOOD, APODS_STATUS_LOADING, clearApodObjs, setApodObjs, setApodsStatus, setApodsStatusError, setDateRef } from "../redux/ducks/apod";

export let getApodDaysAgo = (currDate, days) => {
    let currDateString = currDate.toISOString().split('T')[0];

    let targetDate = new Date(currDate);
    targetDate.setDate(currDate.getDate() - days);
    let targetDateString = targetDate.toISOString().split('T')[0];

    store.dispatch(setDateRef(targetDate));
    apodRange(targetDateString, currDateString);
}

export let apodRange = async (startDate, endDate) => {
    store.dispatch(setApodsStatus(APODS_STATUS_LOADING));
    await fetch(`https://api.nasa.gov/planetary/apod?api_key=zfmmKGbz6hiJDtuG7zO4Dtun7YjyWgvHk7d4LQOz&start_date=${startDate}${endDate === undefined ? "" : `&end_date=${endDate}`}`)
        .then(res => res.json())
        .then(data => {
            if (data.code === undefined) {
                let arr = store.getState().apod.apodObjs;
                data.reverse();
                arr = arr.concat(data);
                store.dispatch(setApodObjs(arr));
                store.dispatch(setApodsStatus(APODS_STATUS_GOOD));
            } else {
                store.dispatch(setApodsStatusError("INVALID DATE RANGE"));
            }
        })
        .catch(err => {
            console.log(err)
            store.dispatch(setApodsStatusError("SERVER ERROR"));
        });
}

export let initialize = () => {
    store.dispatch(clearApodObjs());
    getApodDaysAgo(new Date(), 7);
}