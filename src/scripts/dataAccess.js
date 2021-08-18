import { baseURL } from "./.Settings.js"

const applicationState = {
    catReviewers: [],
    reviews: [],
    dumbDogs: []
}
const mainContainer = document.querySelector("#container")

export const fetchCatReviewers = () => {
    // fetch makes an http request and returns a promise
    return fetch(`${baseURL}/catReviewers`)
    // waits for promise to be returned as string and then parses data into a javaScript data structure
    .then(response => response.json())
        .then(
            (cats) => {
                // Store the external state in application state
                applicationState.catReviewers = cats
            }
        )
}

export const fetchDogsToBeReviewed = () => {
    // fetch makes an http request and returns a promise
    return fetch(`${baseURL}/dogsReviewed`)
    // waits for promise to be returned as string and then parses data into a javaScript data structure
    .then(response => response.json())
        .then(
            (dogs) => {
                // Store the external state in application state
                applicationState.dumbDogs = dogs
            }
        )
}

export const fetchReviews = () => {
    return fetch(`${baseURL}/reviews?_sort=timestamp&_order=desc`)
        .then(response => response.json())
        .then(
            (reviews) => {
                // Store the external state in application state
                applicationState.reviews = reviews
            }
        )
}

export const sendReview = (review) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    }

    return fetch(`${baseURL}/reviews`, fetchOptions)
        .then(response => response.json())
        .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const deleteReview = (id) => {

    return fetch(`${baseURL}/reviews/${id}`, { method: "DELETE" })

        .then(

            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getCats = () => applicationState.catReviewers.map(cat => ({...cat}))

export const getDumbDogs = () => applicationState.dumbDogs.map(dummy => ({...dummy}))

export const getReviews = () => applicationState.reviews.map(review => ({...review}))