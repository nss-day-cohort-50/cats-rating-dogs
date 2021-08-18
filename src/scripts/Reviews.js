import { getDumbDogs, getCats, getReviews, deleteReview } from "./dataAccess.js"


export const Reviews = () => {
    const reviews = getReviews()
    const dogs = getDumbDogs()
    const cats = getCats()

    const recentReviews = reviews.map(review => {
        const findDog = dogs.find(dog => review.dogId === dog.id)
        const findCat = cats.find(cat => review.catId === cat.id)
        return `<p>${new Date(review.timestamp).toLocaleString()}: ${findCat.name} gave ${findDog.name} ${review.rating} 
                paws and left a comment saying, "${review.reviewText}."
                <button id="deleteReview--${review.id}">DELETE</button></p>`
    }).join("")

    return recentReviews
    }

document.addEventListener("click", evt => {
    if (evt.target.id.startsWith("deleteReview--")) {
        const [, reviewId] = evt.target.id.split("--")
        const revID = parseInt(reviewId)
        deleteReview(revID)
    }

})