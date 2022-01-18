import store from "../redux/configure-store";
import { setApodObjs } from "../redux/ducks/apod";

export let apodRange = async (startDate, endDate) => {
    await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => res.json())
        .then(data => {
            let arr = store.getState().apod.apodObjs;
            arr.push(data);
            store.dispatch(setApodObjs(arr));
        })
        .catch(err => console.log(err));
}