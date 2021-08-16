import { CatsRateDogs } from "./CatsRateDogs.js";
import { fetchCatReviewers } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchCatReviewers().then(() => {
        mainContainer.innerHTML = CatsRateDogs()
    })
}
renderHTML()