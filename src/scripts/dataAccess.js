import { baseURL } from "./.Settings.js"

const applicationState = {
    catReviewers: [],
    reviews: [],
    dogsReviewed: []
}

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

export const getCats = () => applicationState.catReviewers.map(cat => ({...cat}))