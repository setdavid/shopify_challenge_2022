import store from "../redux/configure-store";
import { setApodObjs } from "../redux/ducks/apod";

export let apodRange = async (clear, startDate, endDate) => {
    await fetch(`https://api.nasa.gov/planetary/apod?api_key=zfmmKGbz6hiJDtuG7zO4Dtun7YjyWgvHk7d4LQOz&start_date=${startDate}${endDate == undefined ? "" : `&end_date=${endDate}`}`)
        .then(res => res.json())
        .then(data => {
            let arr = store.getState().apod.apodObjs;

            if (clear) {
                arr = new Array();
            }

            arr = arr.concat(data);

            store.dispatch(setApodObjs(arr));
        })
        .catch(err => console.log(err));
}