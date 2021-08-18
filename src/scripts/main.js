import { CatsRateDogs } from "./CatsRateDogs.js";
import { fetchCatReviewers, fetchDogsToBeReviewed, fetchReviews } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchDogsToBeReviewed()
    fetchCatReviewers()
    fetchReviews().then(() => {
        mainContainer.innerHTML = CatsRateDogs()
    })
}
renderHTML()

mainContainer.addEventListener("stateChanged", e => {
    renderHTML()
})