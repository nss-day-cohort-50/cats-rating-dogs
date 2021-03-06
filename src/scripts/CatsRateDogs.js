import { CatSelect } from "./Cats.js"
import { DogSelect } from "./Dogs.js"
import { RatingForm } from "./RatingForm.js"
import { Reviews } from "./Reviews.js"

export const CatsRateDogs = () => {
    return `
    <h1>Cats Rate Dogs</h1>
    <div id="header-image"><img alt="Cats Rate Dogs" src="images/CatsRateDogs1.png"></div>
    <section id='cat-reviewers'>
    ${CatSelect()}
    </section>
    <section id='dog-reviewers'>
    ${DogSelect()}
    </section>
    <section id='rating-form'>
    ${RatingForm()}
    </section>
    <section class="reviews">
        <h2>Past Reviews</h2>
            ${Reviews()}
    </section>
    `
}