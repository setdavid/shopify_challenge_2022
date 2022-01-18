import store from "../redux/configure-store";
import { clearApodObjs, setApodObjs, setDateRef } from "../redux/ducks/apod";

export let getApodDaysAgo = (currDate, days) => {
    let currDateString = currDate.toISOString().split('T')[0];

    let targetDate = new Date(currDate);
    targetDate.setDate(currDate.getDate() - days);
    let targetDateString = targetDate.toISOString().split('T')[0];

    store.dispatch(setDateRef(targetDate));
    apodRange(false, targetDateString, currDateString);
}

export let apodRange = async (clear, startDate, endDate) => {
    await fetch(`https://api.nasa.gov/planetary/apod?api_key=zfmmKGbz6hiJDtuG7zO4Dtun7YjyWgvHk7d4LQOz&start_date=${startDate}${endDate === undefined ? "" : `&end_date=${endDate}`}`)
        .then(res => res.json())
        .then(data => {
            let arr = store.getState().apod.apodObjs;

            if (clear) {
                arr = [];
            }

            arr = data.concat(arr);

            store.dispatch(setApodObjs(arr));
        })
        .catch(err => console.log(err));
}

export let initialize = () => {
    store.dispatch(clearApodObjs());
    getApodDaysAgo(new Date(), 7);
}