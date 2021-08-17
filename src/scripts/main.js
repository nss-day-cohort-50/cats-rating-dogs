import { CatsRateDogs } from "./CatsRateDogs.js";
import { fetchCatReviewers, fetchDogsToBeReviewed } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchDogsToBeReviewed()
    fetchCatReviewers().then(() => {
        mainContainer.innerHTML = CatsRateDogs()
    })
}
renderHTML()